import re
from rest_framework import serializers
from .models import ProjectCategory, Project, ProjectImage, HireMeRequest


class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = '__all__'


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image']

class ProjectSerializer(serializers.ModelSerializer):
    category_detail = ProjectCategorySerializer(source='category', read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

class HireMeRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = HireMeRequest
        fields = '__all__'
        read_only_fields = ('status', 'created_at')

    def _sanitize_html(self, value):
        """Remove potentially dangerous HTML tags and attributes while preserving safe formatting."""
        if not value:
            return value
        # Remove script tags and their contents
        value = re.sub(r'<script[^>]*>.*?</script>', '', value, flags=re.DOTALL | re.IGNORECASE)
        # Remove event handler attributes (onclick, onerror, onload, etc.)
        value = re.sub(r'\s+on\w+\s*=\s*["\'][^"\']*["\']', '', value, flags=re.IGNORECASE)
        value = re.sub(r'\s+on\w+\s*=\s*\S+', '', value, flags=re.IGNORECASE)
        # Remove javascript: protocol in href/src attributes
        value = re.sub(r'(href|src)\s*=\s*["\']javascript:[^"\']*["\']', '', value, flags=re.IGNORECASE)
        # Remove iframe, object, embed tags
        value = re.sub(r'<(iframe|object|embed|form)[^>]*>.*?</\1>', '', value, flags=re.DOTALL | re.IGNORECASE)
        value = re.sub(r'<(iframe|object|embed|form)[^>]*/?\s*>', '', value, flags=re.IGNORECASE)
        return value

    def validate_project_description(self, value):
        """Sanitize HTML and wrap plain text in <p> tags for CKEditor5Field compatibility."""
        if value and not value.strip().startswith('<'):
            value = f'<p>{value}</p>'
        value = self._sanitize_html(value)
        return value

    def validate_budget(self, value):
        """Allow empty budget values - convert empty string to None."""
        if value == '' or value is None:
            return None
        if value < 0:
            raise serializers.ValidationError("Budget cannot be negative.")
        return value

    def validate_email(self, value):
        """Stricter email validation."""
        if value and not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
            raise serializers.ValidationError("Please provide a valid email address.")
        return value