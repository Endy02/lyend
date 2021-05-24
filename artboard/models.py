from django.db.models.signals import m2m_changed
from django.core.exceptions import ValidationError
from django.db import models
from .utils import get_colour_name
import webcolors

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

class Artboard(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class Color(models.Model):
    hex = models.CharField(max_length=10)
    rgb = models.CharField(max_length=50, blank=True)
    name = models.CharField(max_length=100, blank=True)
    artboard = models.ForeignKey(Artboard, related_name='colors', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.hex
    
    def save(self, *args, **kwargs):
        self.rgb = webcolors.hex_to_rgb(self.hex)
        self.name = get_colour_name(self.rgb)
        return super(Color, self).save(*args, **kwargs)
