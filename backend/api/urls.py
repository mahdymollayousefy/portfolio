# backend/api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectCategoryViewSet, ProjectViewSet, HireMeRequestViewSet, server_status

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'categories', ProjectCategoryViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'hire-me', HireMeRequestViewSet, basename='hire-me')

urlpatterns = [
    path('', include(router.urls)),
    path('status/', server_status, name='server-status'),
]