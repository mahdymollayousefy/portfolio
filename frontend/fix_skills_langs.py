import re

filepath = 'src/locales/Skills.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

# German block
git_de = r'''      },
      {
        id: 6,
        name: "Git & Versionskontrolle",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "Versiert in der Versionskontrolle mit Git und GitHub, was eine nahtlose Zusammenarbeit und Codebase-Verwaltung ermöglicht."
      },
      {
        id: 5,
        name: "KI & Prompt Engineering",'''
content = re.sub(
    r'      },\n      \{\n        id: 5,\n        name: "KI & Prompt Engineering",',
    git_de,
    content
)

# Dutch block
git_nl = r'''      },
      {
        id: 6,
        name: "Git & Versiebeheer",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "Bedreven in versiebeheer met Git en GitHub, wat naadloze samenwerking en codebase-beheer mogelijk maakt."
      },
      {
        id: 5,
        name: "AI & Prompt Engineering",'''
content = re.sub(
    r'      },\n      \{\n        id: 5,\n        name: "AI & Prompt Engineering",',
    git_nl,
    content
)

# Persian block
git_fa = r'''      },
      {
        id: 6,
        name: "گیت و کنترل نسخه (Git)",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "مسلط به سیستم‌های کنترل نسخه از جمله Git و GitHub، به منظور همکاری تیمی یکپارچه و مدیریت بهینه سورس‌کدها."
      },
      {
        id: 5,
        name: "هوش مصنوعی و مهندسی پرامپت",'''
content = re.sub(
    r'      },\n      \{\n        id: 5,\n        name: "هوش مصنوعی و مهندسی پرامپت",',
    git_fa,
    content
)

with open(filepath, 'w') as f:
    f.write(content)
