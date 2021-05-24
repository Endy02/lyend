from django.urls import path
from . import views as front


urlpatterns = [
    path('', front.index),
    path('artboards', front.index),
    path('gradients', front.index),
    path('armony', front.index),
]
