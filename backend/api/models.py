from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

LUCIDE_ICONS = [
    ('Activity', 'Activity'),
    ('Archive', 'Archive'),
    ('Award', 'Award'),
    ('Book', 'Book'),
    ('Briefcase', 'Briefcase'),
    ('CheckCircle', 'CheckCircle'),
    ('Cloud', 'Cloud'),
    ('CloudCog', 'CloudCog'),
    ('Code', 'Code'),
    ('Code2', 'Code2'),
    ('Cpu', 'Cpu'),
    ('Database', 'Database'),
    ('FileText', 'FileText'),
    ('Globe', 'Globe'),
    ('Layers', 'Layers'),
    ('Layout', 'Layout'),
    ('LayoutTemplate', 'LayoutTemplate'),
    ('Monitor', 'Monitor'),
    ('Rocket', 'Rocket'),
    ('Server', 'Server'),
    ('ServerCog', 'ServerCog'),
    ('Shield', 'Shield'),
    ('ShieldCheck', 'ShieldCheck'),
    ('Smartphone', 'Smartphone'),
    ('Star', 'Star'),
    ('Terminal', 'Terminal'),
    ('Users', 'Users'),
    ('Wrench', 'Wrench'),
    ('PenTool', 'PenTool'),
    ('PenBox', 'PenBox'),
    ('Laptop', 'Laptop')
]

TECH_ICONS = [
    ('devicon-python-plain', 'Python'),
    ('devicon-django-plain', 'Django'),
    ('devicon-react-original', 'React'),
    ('devicon-nextjs-plain', 'Next.js'),
    ('devicon-docker-plain', 'Docker'),
    ('devicon-postgresql-plain', 'PostgreSQL'),
    ('devicon-nginx-original', 'Nginx'),
    ('devicon-cloudflare-plain', 'Cloudflare'),
    ('devicon-ubuntu-plain', 'Ubuntu'),
    ('devicon-linux-plain', 'Linux'),
    ('devicon-git-plain', 'Git'),
    ('devicon-github-original', 'GitHub'),
    ('devicon-javascript-plain', 'JavaScript'),
    ('devicon-typescript-plain', 'TypeScript'),
    ('devicon-nodejs-plain-wordmark', 'Node.js'),
    ('devicon-html5-plain', 'HTML5'),
    ('devicon-css3-plain', 'CSS3'),
    ('devicon-tailwindcss-original', 'Tailwind CSS'),
    ('devicon-redis-plain', 'Redis'),
    ('devicon-mysql-plain', 'MySQL'),
    ('devicon-amazonwebservices-plain-wordmark', 'AWS'),
    ('devicon-googlecloud-plain', 'Google Cloud'),
]

ALL_ICONS = LUCIDE_ICONS + TECH_ICONS

class TechStack(models.Model):
    name = models.CharField(max_length=50, unique=True)
    icon = models.CharField(max_length=100, choices=TECH_ICONS, help_text="Select a tech icon")

    def __str__(self):
        return self.name

class ProjectCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    icon = models.CharField(max_length=50, choices=LUCIDE_ICONS, blank=True, help_text="Select a Lucide icon")
    
    class Meta:
        verbose_name_plural = "Project Categories"

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, help_text="e.g., Backend, AI, DevOps")
    icon = models.CharField(max_length=100, choices=ALL_ICONS, blank=True, help_text="Select an icon")
    description = CKEditor5Field('Description', config_name='default', blank=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(ProjectCategory, on_delete=models.SET_NULL, null=True, blank=True, related_name='projects')
    description = CKEditor5Field('Description', config_name='default')
    tech_stacks = models.ManyToManyField(TechStack, blank=True, related_name='projects')
    icon = models.CharField(max_length=100, choices=ALL_ICONS, blank=True, help_text="Icon for the tech stack/project")
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    estimated_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, help_text="Estimated price in USD")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='project_images/')
    
    def __str__(self):
        return f"{self.project.title} - Image"

class HireMeRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('reviewed', 'Reviewed'),
        ('contacted', 'Contacted')
    ]
    name = models.CharField(max_length=100, verbose_name="Client/Company Name")
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True, help_text="Include international code, e.g., +1234567890")
    project_description = CKEditor5Field('Project Description', config_name='default')
    budget = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, help_text="Estimated budget in USD")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.status}"