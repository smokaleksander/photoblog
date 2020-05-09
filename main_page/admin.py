from django.contrib import admin

# Register your models here.
from .models import MainPagePhotoSlider, MainPageCounter, Testimonial

admin.site.register(MainPagePhotoSlider)
admin.site.register(MainPageCounter)
admin.site.register(Testimonial)