from django.contrib import admin
from django.db import models
from .models import Artboard, Color, Category

# Register your models here.

class ColorAdmin(admin.TabularInline):
    model = Color


@admin.register(Artboard)
class ArtboardAdmin(admin.ModelAdmin):
    inlines=[ColorAdmin]
    list_display= ('name', 'category', 'created_at')
    ordering =("-created_at",)
    
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display =('title', 'created_at')
    ordering = ("-created_at",)