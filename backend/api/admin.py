import json
from django import forms
from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin, TabularInline
from modeltranslation.admin import TranslationAdmin
from .models import ProjectCategory, Project, ProjectImage, HireMeRequest, TECH_ICONS


class TechStackWidget(forms.Textarea):
    """Custom widget that accepts comma-separated tech stack names
    and converts them to/from JSON list format."""
    
    def __init__(self, attrs=None):
        default_attrs = {'rows': 3, 'cols': 80, 'placeholder': 'Enter tech stacks separated by commas, e.g.: React, Django, PostgreSQL'}
        if attrs:
            default_attrs.update(attrs)
        super().__init__(attrs=default_attrs)
    
    def format_value(self, value):
        if value is None:
            return ''
        if isinstance(value, list):
            return ', '.join(value)
        if isinstance(value, str):
            try:
                parsed = json.loads(value)
                if isinstance(parsed, list):
                    return ', '.join(str(item) for item in parsed)
            except (json.JSONDecodeError, TypeError):
                pass
            return value
        return str(value)


class TechStackField(forms.CharField):
    """Custom form field that converts comma-separated input to a JSON list."""
    widget = TechStackWidget
    
    def __init__(self, *args, **kwargs):
        kwargs.setdefault('required', False)
        kwargs.setdefault('help_text', 'Enter tech stacks separated by commas, e.g.: React, Django, PostgreSQL')
        super().__init__(*args, **kwargs)
    
    def clean(self, value):
        if not value or not value.strip():
            return []
        # First try parsing as JSON in case user enters valid JSON
        try:
            parsed = json.loads(value)
            if isinstance(parsed, list):
                return [str(item).strip() for item in parsed if str(item).strip()]
        except (json.JSONDecodeError, TypeError):
            pass
        # Otherwise, treat as comma-separated
        items = [item.strip() for item in value.split(',') if item.strip()]
        return items


class ProjectForm(forms.ModelForm):
    tech_stacks = TechStackField()
    
    class Meta:
        model = Project
        fields = '__all__'


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(ModelAdmin):
    list_display = ('name', 'icon', 'display_icon')
    
    def display_icon(self, obj):
        if obj.icon:
            if obj.icon.startswith('devicon-'):
                return format_html('<i class="{}" style="font-size:24px;"></i>', obj.icon)
            return format_html('<span style="font-size:14px;">{}</span>', obj.icon)
        return '-'
    display_icon.short_description = 'Preview'


class ProjectImageInline(TabularInline):
    model = ProjectImage
    extra = 1

@admin.register(Project)
class ProjectAdmin(ModelAdmin, TranslationAdmin):
    form = ProjectForm
    list_display = ('title', 'category', 'display_tech_stacks', 'created_at', 'github_link', 'estimated_price')
    list_filter = ('category',)
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title',)
    ordering = ('-created_at',)
    inlines = [ProjectImageInline]

    def display_tech_stacks(self, obj):
        if obj.tech_stacks:
            return ', '.join(obj.tech_stacks)
        return '-'
    display_tech_stacks.short_description = 'Tech Stacks'

@admin.register(HireMeRequest)
class HireMeRequestAdmin(ModelAdmin):
    list_display = ('name', 'email', 'phone', 'budget', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'email', 'phone', 'project_description')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)
    
    # Allows you to quickly change status from the list view
    list_editable = ('status',)