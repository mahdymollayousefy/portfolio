import re

filepath = 'src/locales/WorkWithMe.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

# Fix Persian location
content = re.sub(
    r'(fa:\s*\{.*?location:\s*)"Iran"',
    r'\1"ایران"',
    content,
    flags=re.DOTALL
)

# German placeholders
content = re.sub(
    r'(de:\s*\{.*?budget:\s*)"[^"]*"',
    r'\1"Budget ($) (Optional)",\n    placeholder_name: "Max Mustermann",\n    placeholder_email: "max@beispiel.de",\n    placeholder_budget: "5000",\n    placeholder_desc: "Erzählen Sie mir von Ihrem Projekt..."',
    content,
    flags=re.DOTALL
)

# Dutch placeholders
content = re.sub(
    r'(nl:\s*\{.*?budget:\s*)"[^"]*"',
    r'\1"Budget ($) (Optioneel)",\n    placeholder_name: "Jan Jansen",\n    placeholder_email: "jan@voorbeeld.nl",\n    placeholder_budget: "5000",\n    placeholder_desc: "Vertel me over uw project..."',
    content,
    flags=re.DOTALL
)

# Persian placeholders
content = re.sub(
    r'(fa:\s*\{.*?budget:\s*)"[^"]*"',
    r'\1"بودجه ($) (اختیاری)",\n    placeholder_name: "علی علوی",\n    placeholder_email: "ali@example.com",\n    placeholder_budget: "5000",\n    placeholder_desc: "درباره پروژه خود توضیح دهید..."',
    content,
    flags=re.DOTALL
)

with open(filepath, 'w') as f:
    f.write(content)

