import re

filepath = 'src/locales/Skills.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

git_fa = r'''      },
      {
        id: 6,
        name: "گیت و کنترل نسخه",
        category: "DevOps",
        icon: "devicon-git-plain",
        description: "مسلط به سیستم‌های کنترل نسخه از جمله Git و GitHub، به منظور همکاری تیمی یکپارچه و مدیریت بهینه سورس‌کدها."
      },
      {
        id: 5,
        name: "هوش مصنوعی",'''
content = re.sub(
    r'      },\n      \{\n        id: 5,\n        name: "هوش مصنوعی",',
    git_fa,
    content
)

with open(filepath, 'w') as f:
    f.write(content)
