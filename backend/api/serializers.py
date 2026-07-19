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

    def validate_project_description(self, value):
        """Wrap plain text in <p> tags for CKEditor5Field compatibility."""
        if value and not value.strip().startswith('<'):
            value = f'<p>{value}</p>'
        return value

    def validate_budget(self, value):
        """Allow empty budget values - convert empty string to None."""
        if value == '' or value is None:
            return None
        return value