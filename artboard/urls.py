from django.urls import path
from . import views as artboard

urlpatterns = [
    path('',artboard.artboards , name="artboards"),
]