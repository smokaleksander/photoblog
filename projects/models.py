from django.db import models
from django.utils.text import slugify
import os
# Create your models here.
class Project(models.Model):
    def get_image_path(self, filename):
        return os.path.join('photos', self.title, filename)

    title= models.CharField(max_length=150, unique=True)
    description= models.TextField(max_length=1100)
    date = models.DateField(auto_now_add=True)
    img1 = models.ImageField(upload_to=get_image_path)
    img2 = models.ImageField(upload_to=get_image_path)
    img3 = models.ImageField(upload_to=get_image_path)
    img4 = models.ImageField(upload_to=get_image_path)
    img5 = models.ImageField(upload_to=get_image_path, blank=True)
    img6 = models.ImageField(upload_to=get_image_path, blank=True)
    img7 = models.ImageField(upload_to=get_image_path, blank=True)
    img8 = models.ImageField(upload_to=get_image_path, blank=True)
    img9 = models.ImageField(upload_to=get_image_path, blank=True)
    img10 = models.ImageField(upload_to=get_image_path, blank=True)
    
    slug=models.SlugField(default='', editable=False)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs): # new
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)