from django.db import models
from django.utils.text import slugify
import os
# Create your models here.
class Tag(models.Model):
    name =models.CharField( max_length=50)

    def __str__(self):
        return self.name

class GalleryImage(models.Model):
    img=models.ImageField(upload_to='photos/')

class Gallery(models.Model):
    title= models.CharField(max_length=150, unique=True)
    date = models.DateField(auto_now_add=True)
    tags = models.ManyToManyField(Tag)
    imgs=models.ForeignKey(GalleryImage, on_delete=models.CASCADE)
    slug=models.SlugField(default='', editable=False)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs): # new
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

