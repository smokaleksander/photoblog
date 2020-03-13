from django.shortcuts import render,get_object_or_404
from .models import Gallery, Tag
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
# Create your views here.
def galleries(request):
    galleries = Gallery.objects.all()
    tags= Tag.objects.all()

    paginator= Paginator(galleries,9)
    page =request.GET.get('page')
    paged_galleries=paginator.get_page(page)

    context={
        'galleries':paged_galleries,
        'tags':tags
    }
    return render(request, 'galleries.html',context)

def gallery(request,slug):
    gallery=get_object_or_404(Gallery, slug=slug)

    context={
        'gallery':gallery
    }
    return render(request, 'gallery.html', context)
