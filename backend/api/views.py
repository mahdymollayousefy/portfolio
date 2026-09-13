# backend/api/views.py
import logging

from rest_framework import viewsets, mixins, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers
from rest_framework.throttling import AnonRateThrottle

from .models import ProjectCategory, Project, HireMeRequest
from .serializers import ProjectCategorySerializer, ProjectSerializer, HireMeRequestSerializer
from .pagination import StandardResultsSetPagination
from .tasks import process_hire_me_request

logger = logging.getLogger(__name__)


class ProjectCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer

    @method_decorator(cache_page(60 * 2))  # 2 minute cache
    @method_decorator(vary_on_headers('Accept-Language'))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.select_related('category').prefetch_related('images').order_by('-created_at')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    pagination_class = StandardResultsSetPagination

    @method_decorator(cache_page(60 * 2))  # 2 minute cache
    @method_decorator(vary_on_headers('Accept-Language'))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class HireMeRequestViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = HireMeRequest.objects.all()
    serializer_class = HireMeRequestSerializer
    throttle_classes = [AnonRateThrottle]

    def perform_create(self, serializer):
        instance = serializer.save()
        try:
            process_hire_me_request.delay(instance.id, instance.name, instance.email)
        except Exception as e:
            logger.warning(
                "Celery task dispatch failed for HireMeRequest #%s: %s. "
                "Request was saved but async processing is unavailable.",
                instance.id, str(e)
            )

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

@extend_schema(responses={200: dict})
@api_view(['GET'])
def server_status(request):
    return Response({
        "status": "online",
        "message": "Django API is active."
    })