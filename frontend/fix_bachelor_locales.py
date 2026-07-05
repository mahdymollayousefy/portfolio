import re

filepath = 'src/locales/Skills.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

# Replace the German translation
content = re.sub(
    r'(de:\s*\{.*?)cert_1: "Bachelor\'s degree in Computer Engineering, Graduated",',
    r'\1cert_1: "Bachelor in Computer Engineering, Abgeschlossen",',
    content,
    flags=re.DOTALL
)

# Replace the Dutch translation
content = re.sub(
    r'(nl:\s*\{.*?)cert_1: "Bachelor\'s degree in Computer Engineering, Graduated",',
    r'\1cert_1: "Bachelordiploma in Computer Engineering, Afgestudeerd",',
    content,
    flags=re.DOTALL
)

# Replace the Persian translation
content = re.sub(
    r'(fa:\s*\{.*?)cert_1: "Bachelor\'s degree in Computer Engineering, Graduated",',
    r'\1cert_1: "لیسانس مهندسی کامپیوتر، فارغ التحصیل",',
    content,
    flags=re.DOTALL
)

with open(filepath, 'w') as f:
    f.write(content)
