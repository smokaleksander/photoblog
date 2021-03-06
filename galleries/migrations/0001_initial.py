# Generated by Django 3.0.3 on 2020-02-24 22:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GalleryImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='photos/')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, unique=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('slug', models.SlugField(default='', editable=False)),
                ('imgs', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='galleries.GalleryImage')),
                ('tags', models.ManyToManyField(to='galleries.Tag')),
            ],
        ),
    ]
