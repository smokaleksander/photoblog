# Generated by Django 3.0.3 on 2020-02-21 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('galleries', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='slug',
            field=models.SlugField(default='slug1', unique=True),
        ),
    ]