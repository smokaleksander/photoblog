from django.urls import path
from . import views

urlpatterns = [
    path('galerie', views.galleries, name='galleries'),
    path('galerie/<slug:slug>',views.gallery, name='gallery')
]

