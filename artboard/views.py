from artboard.models import Artboard
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ArtboardSerializer
from .models import Artboard


# Create your views here.

class ArtboardView(generics.ListAPIView):
    queryset = Artboard.objects.all()
    serializer_class = ArtboardSerializer