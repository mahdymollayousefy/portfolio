# backend/api/views.py
from rest_framework import viewsets, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework.throttling import AnonRateThrottle

from .models import ProjectCategory, Project, HireMeRequest
from .serializers import ProjectCategorySerializer, ProjectSerializer, HireMeRequestSerializer
from .pagination import StandardResultsSetPagination
from .tasks import process_hire_me_request



class ProjectCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer

    @method_decorator(cache_page(60 * 15))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    pagination_class = StandardResultsSetPagination

    @method_decorator(cache_page(60 * 15))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class HireMeRequestViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = HireMeRequest.objects.all()
    serializer_class = HireMeRequestSerializer
    throttle_classes = [AnonRateThrottle]

    def perform_create(self, serializer):
        instance = serializer.save()
        process_hire_me_request.delay(instance.id, instance.name, instance.email)

@extend_schema(responses={200: dict})
@api_view(['GET'])
def server_status(request):
    return Response({
        "status": "online",
        "message": "Django API is active."
    })