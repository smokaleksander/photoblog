from django.db import models
from django.utils.text import slugify
import os
# Create your models here.
class Tag(models.Model):
    name =models.CharField( max_length=50)

    def __str__(self):
        return self.name

class Gallery(models.Model):
    def get_image_path(self, filename):
        return os.path.join('photos', self.title, filename)

    title= models.CharField(max_length=150)
    date = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag)
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
    img11 = models.ImageField(upload_to=get_image_path, blank=True)
    img12 = models.ImageField(upload_to=get_image_path, blank=True)
    img13 = models.ImageField(upload_to=get_image_path, blank=True)
    img14 = models.ImageField(upload_to=get_image_path, blank=True)
    img15 = models.ImageField(upload_to=get_image_path, blank=True)
    slug=models.SlugField(null=False, unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs): # new
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)