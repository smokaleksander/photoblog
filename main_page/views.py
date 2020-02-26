from django.shortcuts import render
from projects.models import Project
# Create your views here.
def index(request):
    projects=Project.objects.order_by('-date')[:3]
    context={
        'projects':projects
    }
    for project in projects:
        print(project)
        print(project.imgs)
        print(type(project.imgs))
        print(project.imgs.img)
        #for img in project.imgs:
        #    print(img.ulr)
    return render(request, 'index.html',context)