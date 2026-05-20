# backend/api/admin.py
from django.contrib import admin
from .models import Skill, Project, HireMeRequest

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency')
    list_filter = ('category',)
    search_fields = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'github_link')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'tech_stack')
    ordering = ('-created_at',)

@admin.register(HireMeRequest)
class HireMeRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'budget', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'email', 'project_description')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)
    
    # Allows you to quickly change status from the list view
    list_editable = ('status',)