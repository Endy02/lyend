from django.urls import path
from . import views as artboard

urlpatterns = [
    path('api/artboards/',artboard.ArtboardView.as_view() , name="api-artboards"),
]