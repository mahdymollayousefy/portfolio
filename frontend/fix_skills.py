import json
import re

filepath = 'src/locales/Skills.locales.js'
with open(filepath, 'r') as f:
    content = f.read()

# Update cert_1 in all languages
content = re.sub(r'cert_1: "[^"]*",', 'cert_1: "Bachelor\'s degree in Computer Engineering, Graduated",', content)
content = re.sub(r'cert_2: "[^"]*",\s*cert_3: "[^"]*",', '', content)

# Update languages proficiency
content = re.sub(r'lang_en_prof: "[^"]*",', 'lang_en_prof: "Fluent (C1)",', content)
content = re.sub(r'lang_fa_prof: "[^"]*",', 'lang_fa_prof: "Native",', content)

# Remove lang_nl and lang_nl_prof
content = re.sub(r'lang_nl: "[^"]*",\s*lang_nl_prof: "[^"]*",', '', content)

# Add Git after Linux and Docker
# We'll just search for the skills array and insert Git.
# But skills is an array of objects.
# Let's insert it using string manipulation carefully.

git_skill = """      {
        id: 99,
        name: "Git",
        category: "Version Control",
        icon: "git",
        description: "Proficient in version control using Git and GitHub, enabling seamless collaboration and codebase management."
      },
"""

# Let's just find the end of the skills array and append it? Or maybe insert after Docker?
# Actually, the user asked to add it after Docker and Linux.
# Since it's repeated for all 4 languages, we can do a regex replace.
# Find `name: "Docker"` and insert it after. Or `name: "Linux"`.
# It's safer to just run a node script that parses the JS if we could, but it's not JSON, it's JS with export default.
pass

with open(filepath, 'w') as f:
    f.write(content)

