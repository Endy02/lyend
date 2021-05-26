from rest_framework import routers
from .api import ArtboardViewSet, ColorViewSet

router = routers.DefaultRouter()
router.register('artboards', ArtboardViewSet, 'artboards')
router.register('colors', ColorViewSet, 'colors')

urlpatterns = router.urls
