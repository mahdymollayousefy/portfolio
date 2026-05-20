# backend/api/views.py
from rest_framework import viewsets, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from .models import Skill, Project, HireMeRequest
from .serializers import SkillSerializer, ProjectSerializer, HireMeRequestSerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

# Reverted to a clean CreateModelMixin. It will automatically save to the DB.
class HireMeRequestViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = HireMeRequest.objects.all()
    serializer_class = HireMeRequestSerializer

@extend_schema(responses={200: dict})
@api_view(['GET'])
def server_status(request):
    return Response({
        "status": "online",
        "message": "Django API is active."
    })