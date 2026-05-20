# backend/api/models.py
from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, help_text="e.g., Backend, AI, DevOps")
    proficiency = models.IntegerField(help_text="0 to 100")

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    tech_stack = models.JSONField(default=list)
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    challenge_solution = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class HireMeRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('contacted', 'Contacted')
    ]
    name = models.CharField(max_length=100)
    email = models.EmailField()
    project_description = models.TextField()
    budget = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.status}"