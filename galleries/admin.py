from django.contrib import admin

# Register your models here.
from .models import Gallery, Tag, GalleryImage

admin.site.register(Gallery)
admin.site.register(Tag)
admin.site.register(GalleryImage)