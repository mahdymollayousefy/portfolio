import re
filepath = 'src/locales/WorkWithMe.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

# It might be `location: "Something"`
content = re.sub(r'location:\s*"[^"]*",', 'location: "Dubai",', content)

with open(filepath, 'w') as f:
    f.write(content)
