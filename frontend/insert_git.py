import re

filepath = 'src/locales/Skills.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

git_en = """,
      {
        id: 6,
        name: "Git & Version Control",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "Proficient in version control using Git and GitHub, enabling seamless collaboration and codebase management."
      }"""

git_de = """,
      {
        id: 6,
        name: "Git & Versionskontrolle",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "Versiert in der Versionskontrolle mit Git und GitHub, was eine nahtlose Zusammenarbeit und Codebase-Verwaltung ermöglicht."
      }"""

git_nl = """,
      {
        id: 6,
        name: "Git & Versiebeheer",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "Bedreven in versiebeheer met Git en GitHub, wat naadloze samenwerking en codebase-beheer mogelijk maakt."
      }"""

git_fa = """,
      {
        id: 6,
        name: "گیت و کنترل نسخه",
        category: "دواپس",
        icon: "devicon-git-plain",
        description: "تسلط بر کنترل نسخه با استفاده از Git و GitHub که امکان همکاری روان و مدیریت بهتر کدهای پروژه را فراهم می‌کند."
      }"""

def insert_after_docker(text, lang_code, new_block):
    # Find the Docker block for the given language.
    # We will just replace the specific description closing brace for Docker.
    # A bit hard to match perfectly across languages if description changes.
    # So let's match `icon: "devicon-docker-plain",\n        description: "[^"]*"\n      }`
    pattern = r'(icon: "devicon-docker-plain",\s*description: "[^"]*"\s*})'
    # Wait, we need to only do it for one language at a time.
    # Actually, we can just split by `lang: {` and do it.
    pass

# Better approach:
# English
content = re.sub(
    r'(description: "Strong background in containerizing applications using Docker & Docker Compose. Highly comfortable in Linux environments for server management, deployment pipelines, and ensuring zero-downtime releases."\s*})',
    r'\1' + git_en,
    content
)

# German
content = re.sub(
    r'(description: "Starker Hintergrund in der Containerisierung von Anwendungen mit Docker & Docker Compose. Sehr sicher in Linux-Umgebungen für Serververwaltung, Deployment-Pipelines und die Gewährleistung von Zero-Downtime-Releases."\s*})',
    r'\1' + git_de,
    content
)

# Dutch
content = re.sub(
    r'(description: "Sterke achtergrond in het containeriseren van applicaties met Docker & Docker Compose. Zeer comfortabel in Linux-omgevingen voor serverbeheer, deployment pipelines en het garanderen van zero-downtime releases."\s*})',
    r'\1' + git_nl,
    content
)

# Persian
content = re.sub(
    r'(description: "پیشینه قوی در کانتینرسازی برنامه‌ها با استفاده از Docker و Docker Compose. تسلط کامل بر محیط‌های لینوکس برای مدیریت سرور، پایپ‌لاین‌های استقرار و اطمینان از انتشار بدون قطعی."\s*})',
    r'\1' + git_fa,
    content
)

with open(filepath, 'w') as f:
    f.write(content)
