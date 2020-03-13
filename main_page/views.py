from django.shortcuts import render
from projects.models import Project, ProjectImage
from django.db.models import Prefetch
from .models import MainPagePhotoSlider, MainPageCounter
# Create your views here.
def index(request):
  
    projects=Project.objects.order_by('-date')[:3]
    photo_slider=MainPagePhotoSlider.objects.all().last()
    counter=MainPageCounter.objects.all().last()
    context={
        'projects':projects,
        'photo_slider':photo_slider,
        'counter':counter
    }
    
    return render(request, 'index.html',context)