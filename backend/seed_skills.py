import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from api.models import Skill

Skill.objects.all().delete()

skills_data = [
    {
        'name_en': 'Python',
        'name_fa': 'پایتون',
        'name_de': 'Python',
        'name_nl': 'Python',
        'category': 'Backend',
        'icon': 'devicon-python-plain',
        'description_en': 'Expert-level proficiency in Python. I utilize Python as my core language for building robust backend systems, automating complex workflows, and integrating AI models seamlessly into production environments.',
        'description_fa': 'تسلط در سطح خبره بر پایتون. من از پایتون به عنوان زبان اصلی برای ساخت سیستم‌های قدرتمند بک‌اند، اتوماسیون فرآیندهای پیچیده و ادغام یکپارچه مدل‌های هوش مصنوعی در محیط‌های عملیاتی استفاده می‌کنم.',
        'description_de': 'Expertenkenntnisse in Python. Ich nutze Python als meine Hauptsprache zum Aufbau robuster Backend-Systeme, zur Automatisierung komplexer Workflows und zur nahtlosen Integration von KI-Modellen in Produktionsumgebungen.',
        'description_nl': 'Expert-niveau in Python. Ik gebruik Python als mijn kerntaal voor het bouwen van robuuste backend-systemen, het automatiseren van complexe workflows en het naadloos integreren van AI-modellen in productieomgevingen.',
    },
    {
        'name_en': 'Django & Django REST',
        'name_fa': 'جنگو',
        'name_de': 'Django & Django REST',
        'name_nl': 'Django & Django REST',
        'category': 'Backend',
        'icon': 'devicon-django-plain',
        'description_en': 'Extensive experience in architecting scalable and secure web applications. I specialize in building high-performance RESTful APIs, optimizing complex PostgreSQL queries, and implementing strict security validations.',
        'description_fa': 'تجربه گسترده در معماری اپلیکیشن‌های وب مقیاس‌پذیر و امن. تخصص ویژه در ساخت RESTful APIهای پرسرعت، بهینه‌سازی کوئری‌های پیچیده دیتابیس و پیاده‌سازی اعتبارسنجی‌های امنیتی سخت‌گیرانه.',
        'description_de': 'Umfangreiche Erfahrung in der Architektur skalierbarer und sicherer Webanwendungen. Ich bin spezialisiert auf den Aufbau hochleistungsfähiger RESTful APIs, die Optimierung komplexer PostgreSQL-Abfragen und die Implementierung strenger Sicherheitsvalidierungen.',
        'description_nl': 'Uitgebreide ervaring in het ontwerpen van schaalbare en veilige webapplicaties. Ik ben gespecialiseerd in het bouwen van krachtige RESTful API\'s, het optimaliseren van complexe PostgreSQL-queries en het implementeren van strikte beveiligingsvalidaties.',
    },
    {
        'name_en': 'React & Next.js',
        'name_fa': 'ری‌اکت و نکست',
        'name_de': 'React & Next.js',
        'name_nl': 'React & Next.js',
        'category': 'Frontend',
        'icon': 'devicon-react-original',
        'description_en': 'Proficient in developing dynamic, responsive, and SEO-friendly user interfaces. I leverage Next.js for server-side rendering (SSR) and seamless full-stack integration to deliver exceptional user experiences.',
        'description_fa': 'مهارت بالا در توسعه رابط‌های کاربری داینامیک و واکنش‌گرا. من از Next.js برای رندر سمت سرور (SSR) و یکپارچگی کامل با بک‌اند استفاده می‌کنم تا تجربه کاربری فوق‌العاده‌ای ارائه دهم.',
        'description_de': 'Versiert in der Entwicklung dynamischer, reaktionsschneller und SEO-freundlicher Benutzeroberflächen. Ich nutze Next.js für serverseitiges Rendering (SSR) und nahtlose Full-Stack-Integration, um außergewöhnliche Benutzererlebnisse zu bieten.',
        'description_nl': 'Bekwaam in het ontwikkelen van dynamische, responsieve en SEO-vriendelijke gebruikersinterfaces. Ik gebruik Next.js voor server-side rendering (SSR) en naadloze full-stack integratie om uitzonderlijke gebruikerservaringen te leveren.',
    },
    {
        'name_en': 'Docker & Linux',
        'name_fa': 'داکر و لینوکس',
        'name_de': 'Docker & Linux',
        'name_nl': 'Docker & Linux',
        'category': 'DevOps',
        'icon': 'devicon-docker-plain',
        'description_en': 'Strong background in containerizing applications using Docker & Docker Compose. Highly comfortable in Linux environments for server management, deployment pipelines, and ensuring zero-downtime releases.',
        'description_fa': 'دانش عمیق در کانتینرایز کردن اپلیکیشن‌ها با Docker و Docker Compose. تسلط کامل بر محیط‌های لینوکس برای مدیریت سرور، استقرار پروژه‌ها و اطمینان از آپتایم بالا هنگام انتشار نسخه‌های جدید.',
        'description_de': 'Starker Hintergrund in der Containerisierung von Anwendungen mit Docker & Docker Compose. Sehr vertraut mit Linux-Umgebungen für Serververwaltung, Deployment-Pipelines und die Gewährleistung von Releases ohne Ausfallzeiten.',
        'description_nl': 'Sterke achtergrond in het containeriseren van applicaties met Docker & Docker Compose. Zeer comfortabel in Linux-omgevingen voor serverbeheer, implementatiepijplijnen en het garanderen van releases zonder downtime.',
    },
    {
        'name_en': 'AI & Prompt Engineering',
        'name_fa': 'هوش مصنوعی',
        'name_de': 'KI & Prompt Engineering',
        'name_nl': 'AI & Prompt Engineering',
        'category': 'AI & Automation',
        'icon': 'Cpu',
        'description_en': 'Advanced capabilities in Prompt Engineering and LLM integration. I build smart automation workflows (using tools like n8n) and AI agents that significantly enhance business logic and operational efficiency.',
        'description_fa': 'توانایی پیشرفته در مهندسی پرامپت و ادغام مدل‌های زبانی (LLM). من ورک‌فلوهای هوشمند اتوماسیون و ایجنت‌های هوش مصنوعی می‌سازم که کارایی و منطق تجاری سیستم‌ها را به شدت ارتقا می‌دهند.',
        'description_de': 'Fortgeschrittene Fähigkeiten im Prompt Engineering und der LLM-Integration. Ich baue intelligente Automatisierungs-Workflows (mit Tools wie n8n) und KI-Agenten, die die Geschäftslogik und betriebliche Effizienz erheblich verbessern.',
        'description_nl': 'Geavanceerde vaardigheden in Prompt Engineering en LLM-integratie. Ik bouw slimme automatiseringsworkflows (met tools zoals n8n) en AI-agenten die de bedrijfslogica en operationele efficiëntie aanzienlijk verbeteren.',
    }
]

for item in skills_data:
    skill = Skill(
        name_en=item['name_en'],
        name_fa=item['name_fa'],
        name_de=item['name_de'],
        name_nl=item['name_nl'],
        category=item['category'],
        icon=item['icon'],
        description_en=item['description_en'],
        description_fa=item['description_fa'],
        description_de=item['description_de'],
        description_nl=item['description_nl']
    )
    skill.save()

print("Successfully seeded skills with DE and NL translations.")
