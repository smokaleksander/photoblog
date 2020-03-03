from django.contrib import admin

# Register your models here.
from .models import Gallery, Tag, GalleryImage

class GalleryImageInline(admin.TabularInline):
    model = GalleryImage

class GalleryAdmin(admin.ModelAdmin):
    inlines = [
        GalleryImageInline,
    ]
admin.site.register(GalleryImage)
admin.site.register(Gallery,GalleryAdmin)
admin.site.register(Tag)
