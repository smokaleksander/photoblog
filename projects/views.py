from django.shortcuts import render,get_object_or_404
from .models import Project
# Create your views here.
def projects(request):
    projects= Project.objects.all()
    context={
        'projects':projects
    }
    return render(request, 'projects.html',context)

def project(request,slug):
    project=get_object_or_404(Project, slug=slug)

    context={
        'project':project
    }
    return render(request, 'project.html', context)
