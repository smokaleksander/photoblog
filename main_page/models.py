from django.db import models
from django.core import validators

# Create your models here.
class MainPagePhotoSlider(models.Model):
    img1=models.ImageField(upload_to='photos/')
    img2=models.ImageField(upload_to='photos/')
    img3=models.ImageField(upload_to='photos/')
    img4=models.ImageField(upload_to='photos/')
    img5=models.ImageField(upload_to='photos/')


    ##save method overrided to prevent creating more than one instance (kinda sigleton)
    def save(self, *args, **kwargs):
        if not self.pk and MainPagePhotoSlider.objects.exists():
        # if you'll not check for self.pk 
        # then error will also raised in update of exists model
            raise ValidationError('There is can be only one Main page photo slider instance')
        return super(MainPagePhotoSlider, self).save(*args, **kwargs)

class MainPageCounter(models.Model):
    years=models.IntegerField()
    clients=models.IntegerField()
    projects=models.IntegerField()
    awards=models.IntegerField()

    ##save method overrided to prevent creating more than one instance (kinda sigleton)
    def save(self, *args, **kwargs):
        if not self.pk and MainPageCounter.objects.exists():
        # if you'll not check for self.pk 
        # then error will also raised in update of exists model
            raise ValidationError('There is can be only one Main page counter instance')
        return super(MainPageCounter, self).save(*args, **kwargs)

class Testimonial(models.Model):
    name=models.CharField(max_length=50)
    role=models.CharField(max_length=50)
    description=models.TextField(max_length=300)
    img=models.ImageField(upload_to='photos/', blank=True)

    def __str__(self):
        return self.name
