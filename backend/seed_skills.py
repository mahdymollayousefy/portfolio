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
        'category': 'Backend',
        'icon': 'devicon-python-plain',
        'description_en': 'Expert-level proficiency in Python. I utilize Python as my core language for building robust backend systems, automating complex workflows, and integrating AI models seamlessly into production environments.',
        'description_fa': 'تسلط در سطح خبره بر پایتون. من از پایتون به عنوان زبان اصلی برای ساخت سیستم‌های قدرتمند بک‌اند، اتوماسیون فرآیندهای پیچیده و ادغام یکپارچه مدل‌های هوش مصنوعی در محیط‌های عملیاتی استفاده می‌کنم.',
    },
    {
        'name_en': 'Django & Django REST',
        'name_fa': 'جنگو',
        'category': 'Backend',
        'icon': 'devicon-django-plain',
        'description_en': 'Extensive experience in architecting scalable and secure web applications. I specialize in building high-performance RESTful APIs, optimizing complex PostgreSQL queries, and implementing strict security validations.',
        'description_fa': 'تجربه گسترده در معماری اپلیکیشن‌های وب مقیاس‌پذیر و امن. تخصص ویژه در ساخت RESTful APIهای پرسرعت، بهینه‌سازی کوئری‌های پیچیده دیتابیس و پیاده‌سازی اعتبارسنجی‌های امنیتی سخت‌گیرانه.',
    },
    {
        'name_en': 'React & Next.js',
        'name_fa': 'ری‌اکت و نکست',
        'category': 'Frontend',
        'icon': 'devicon-react-original',
        'description_en': 'Proficient in developing dynamic, responsive, and SEO-friendly user interfaces. I leverage Next.js for server-side rendering (SSR) and seamless full-stack integration to deliver exceptional user experiences.',
        'description_fa': 'مهارت بالا در توسعه رابط‌های کاربری داینامیک و واکنش‌گرا. من از Next.js برای رندر سمت سرور (SSR) و یکپارچگی کامل با بک‌اند استفاده می‌کنم تا تجربه کاربری فوق‌العاده‌ای ارائه دهم.',
    },
    {
        'name_en': 'Docker & Linux',
        'name_fa': 'داکر و لینوکس',
        'category': 'DevOps',
        'icon': 'devicon-docker-plain',
        'description_en': 'Strong background in containerizing applications using Docker & Docker Compose. Highly comfortable in Linux environments for server management, deployment pipelines, and ensuring zero-downtime releases.',
        'description_fa': 'دانش عمیق در کانتینرایز کردن اپلیکیشن‌ها با Docker و Docker Compose. تسلط کامل بر محیط‌های لینوکس برای مدیریت سرور، استقرار پروژه‌ها و اطمینان از آپتایم بالا هنگام انتشار نسخه‌های جدید.',
    },
    {
        'name_en': 'AI & Prompt Engineering',
        'name_fa': 'هوش مصنوعی',
        'category': 'AI & Automation',
        'icon': 'Cpu',
        'description_en': 'Advanced capabilities in Prompt Engineering and LLM integration. I build smart automation workflows (using tools like n8n) and AI agents that significantly enhance business logic and operational efficiency.',
        'description_fa': 'توانایی پیشرفته در مهندسی پرامپت و ادغام مدل‌های زبانی (LLM). من ورک‌فلوهای هوشمند اتوماسیون و ایجنت‌های هوش مصنوعی می‌سازم که کارایی و منطق تجاری سیستم‌ها را به شدت ارتقا می‌دهند.',
    }
]

for item in skills_data:
    skill = Skill(
        name_en=item['name_en'],
        name_fa=item['name_fa'],
        name_de=item['name_en'],
        name_nl=item['name_en'],
        category=item['category'],
        icon=item['icon'],
        description_en=item['description_en'],
        description_fa=item['description_fa'],
        description_de=item['description_en'],
        description_nl=item['description_en']
    )
    skill.save()

print("Successfully seeded skills.")
