from django.shortcuts import render,get_object_or_404
from .models import Gallery, Tag
from django.utils.text import slugify

# Create your views here.
def galleries(request):
    galleries = Gallery.objects.all()
    tags= Tag.objects.all()
    context={
        'galleries':galleries,
        'tags':tags
    }
    return render(request, 'galleries.html',context)
def gallery(request,slug):
    gallery=get_object_or_404(Gallery, slug=slug)

    context={
        'gallery':gallery
    }
    return render(request, 'gallery.html', context)
