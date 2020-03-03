from django.urls import path
from . import views

urlpatterns = [
    path('projekty', views.projects, name='projects'),
    path('projekty/<slug:slug>',views.project, name='project')
]
