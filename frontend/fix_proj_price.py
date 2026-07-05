import re
filepath = 'src/app/project/page.jsx'
with open(filepath, 'r') as f:
    content = f.read()

content = re.sub(
    r"\{t\('estimated_price',\s*'Estimated Price'\)\}:\s*\{project\.estimated_price\}",
    r"{t('estimated_price', 'Estimated Price')}: ${parseInt(project.estimated_price)}",
    content
)

with open(filepath, 'w') as f:
    f.write(content)
