from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import Skill, ProjectCategory, TechStack, Project, ProjectImage, HireMeRequest

@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')

@admin.register(TechStack)
class TechStackAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')

@admin.register(Skill)
class SkillAdmin(TranslationAdmin):
    list_display = ('name', 'category', 'icon')
    list_filter = ('category',)
    search_fields = ('name',)

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    list_display = ('title', 'category', 'created_at', 'github_link', 'estimated_price')
    list_filter = ('category',)
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title',)
    ordering = ('-created_at',)
    inlines = [ProjectImageInline]

@admin.register(HireMeRequest)
class HireMeRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'budget', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'email', 'phone', 'project_description')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)
    
    # Allows you to quickly change status from the list view
    list_editable = ('status',)