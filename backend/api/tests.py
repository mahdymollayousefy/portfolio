from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from api.models import ProjectCategory, Project, ProjectImage, HireMeRequest
from unittest.mock import patch

class APITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.category = ProjectCategory.objects.create(name='Web Development', icon='Code')
        self.project = Project.objects.create(
            title='Test Project',
            slug='test-project',
            description='<p>Test description</p>',
            category=self.category,
            estimated_price='1000.00'
        )

    def test_get_categories(self):
        response = self.client.get('/api/categories/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Handle paginated or non-paginated results
        data = response.json().get('results', response.json())
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Web Development')

    def test_get_projects(self):
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.json().get('results', response.json())
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['title'], 'Test Project')

    def test_get_project_by_slug(self):
        response = self.client.get(f'/api/projects/{self.project.slug}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()['title'], 'Test Project')

    @patch('api.views.process_hire_me_request.delay')
    def test_create_hire_me_request(self, mock_delay):
        data = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'phone': '+1234567890',
            'budget': '5000',
            'project_description': 'I need a website.'
        }
        response = self.client.post('/api/hire-me/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(HireMeRequest.objects.count(), 1)
        
        # Verify Celery task was called
        mock_delay.assert_called_once()

    def test_create_hire_me_request_invalid_email(self):
        data = {
            'name': 'John Doe',
            'email': 'invalid_email',
            'project_description': 'Description'
        }
        response = self.client.post('/api/hire-me/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.json())

    def test_create_hire_me_request_negative_budget(self):
        data = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'budget': -100,
            'project_description': 'Description'
        }
        response = self.client.post('/api/hire-me/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('budget', response.json())
