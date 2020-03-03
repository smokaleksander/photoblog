from django.contrib import admin

# Register your models here.
from .models import Project, ProjectImage



class ProjectImageInline(admin.TabularInline):
    model = ProjectImage

class ProjectAdmin(admin.ModelAdmin):
    inlines = [
        ProjectImageInline,
    ]

admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)