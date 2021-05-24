from django.db.models import fields
from rest_framework import serializers
from .models import Artboard, Category,Color

 
class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'name', 'hex', 'rgb', 'created_at']
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'created_at']


class ArtboardSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(many=True)
    category = CategorySerializer()
    
    class Meta:
        model = Artboard
        fields = ['id', 'name', 'category', 'colors','created_at']