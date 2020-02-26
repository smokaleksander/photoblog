from django.db import models
from django.utils.text import slugify
import os
# Create your models here.


class Project(models.Model):
    title= models.CharField(max_length=150, unique=True)
    description= models.TextField(max_length=1100)
    date = models.DateField(auto_now_add=True)
    slug=models.SlugField(default='', editable=False)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs): # new
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)

class ProjectImage(models.Model):
    img=models.ImageField(upload_to='photos/')
    project=models.ForeignKey(Project, on_delete=models.CASCADE)