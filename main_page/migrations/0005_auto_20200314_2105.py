# Generated by Django 3.0.3 on 2020-03-14 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0004_testimonial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testimonial',
            name='description',
            field=models.TextField(max_length=200),
        ),
    ]