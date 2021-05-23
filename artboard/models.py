from django.db.models.signals import m2m_changed
from django.core.exceptions import ValidationError
from django.db import models
from .utils import get_colour_name

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title


class Color(models.Model):
    name = models.CharField(max_length=100)
    hex = models.CharField(max_length=10)
    rgb = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        hex = self.hex.lstrip('#')
        hlen = len(hex)
        self.rgb = tuple(int(hex[i:i+hlen/3], 16) / 255.0 for i in range(0, hlen, hlen/3))
        self.name = get_colour_name(self.rgb)
        return super(Color, self).save(*args, **kwargs)
    
    
class Artboard(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    colors = models.ManyToManyField(Color)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
def artboards_changed(sender, **kwargs):
    if kwargs['instance'].regions.count() > 5:
        raise ValidationError("You can't assign more than five colors to an artboard")
    

m2m_changed.connect(artboards_changed, sender=Artboard.colors)