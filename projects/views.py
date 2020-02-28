from django.shortcuts import render,get_object_or_404
from .models import Project
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
# Create your views here.
def projects(request):
    projects=Project.objects.all()

    paginator= Paginator(projects,4)
    page =request.GET.get('page')
    paged_projects=paginator.get_page(page)

    context={
        'projects':paged_projects
    }
    return render(request, 'projects.html',context)

def project(request,slug):
    project=get_object_or_404(Project, slug=slug)

    context={
        'project':project
    }
    return render(request, 'project.html', context)
