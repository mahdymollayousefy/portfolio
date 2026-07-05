import re

filepath = 'src/locales/WorkWithMe.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

# English
content = re.sub(
    r'(location:\s*)"[^"]*",',
    r'\1"Iran",',
    content
)

content = re.sub(
    r'budget:\s*"[^"]*",',
    r'budget: "Budget ($) (Optional)",\n    placeholder_name: "John Doe",\n    placeholder_email: "john@example.com",\n    placeholder_budget: "5000",\n    placeholder_desc: "Tell me about your project...",',
    content,
    count=1 # Only English
)

# Replace all locations to Iran (already done by the first regex? Wait, the first regex replaces ALL `location:`).
# Let's handle other languages specifically.

with open(filepath, 'w') as f:
    f.write(content)

