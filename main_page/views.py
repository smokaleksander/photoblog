from django.shortcuts import render
from projects.models import Project, ProjectImage
from django.db.models import Prefetch
# Create your views here.
def index(request):
  
    projects=Project.objects.order_by('-date')[:3]
    context={
        'projects':projects
    }
    
    return render(request, 'index.html',context)