# backend/api/serializers.py
from rest_framework import serializers
from .models import Skill, Project, HireMeRequest

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class HireMeRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = HireMeRequest
        fields = '__all__'
        read_only_fields = ('status', 'created_at')