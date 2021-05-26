from rest_framework import viewsets, permissions, filters
from .models import Artboard, Color
from .serializers import ArtboardSerializer, ColorSerializer

# Artboard Viewset
class ArtboardViewSet(viewsets.ModelViewSet):
    queryset = Artboard.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArtboardSerializer
    
    
class ColorViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['-id']
    