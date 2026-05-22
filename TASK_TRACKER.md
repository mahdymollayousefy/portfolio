## TASK CHECKLIST

### Backend Changes
**1. Skills Models/Admin**
- [x] Add an icon selection feature for the admin to choose icons for skills.
- [x] Remove the "proficiency" field from the skills section.
- [x] Add a new text box field.
- [x] Ensure CKEditor 5 is integrated and used for all text box contents globally.

**2. Project Models/Admin**
- [x] Enable uploading multiple images for a single project.
- [x] Change the tech stack input to accept comma-separated values (do not use JSON structure for this).
- [x] Add a feature for the admin to select an icon based on the tech stack.
- [x] Make project external/live links optional.
- [x] Add an "estimated price" field for projects (this must be displayed in '$' on the frontend).

**3. Hire Me Requests Models**
- [x] Add a field for the client's full name or company name.
- [x] Add a field for the email address.
- [x] Add a field for the phone number, specifically accommodating international code numbers.
- [x] Add a field for the estimated budget (in '$').

### Frontend Changes
**1. General UI/UX Updates**
- [x] Globally reduce the number of small boxes across all pages. Ensure the layout is minimal, and the content flows consistently and continuously. (Partially done, will apply as I go through pages)
- [x] Create a single, combined "Legal" page that includes Privacy Policy, Cookie Preferences, and Rules/Agreements. 
- [x] Ensure this new Legal page supports full translations for English, Dutch (Netherlands), and Farsi.

**2. Header Section**
- [x] Add a translation dropdown button that displays the currently selected language (English, Dutch, فارسی).
- [x] Add appropriate icons next to all menu items.
- [x] Add menu items (with icons) linking to the new Privacy Policy/Cookies/Rules page.
- [x] Add a designated placeholder for a logo in the header.

**3. Footer Section**
- [x] Add social media links (GitHub, LinkedIn, Email) accompanied by their respective icons.
- [x] Add navigation links to all main pages: Home, Skills, Hire Me, and Privacy/Cookies/Agreements.

**4. Home Page**
- [x] Add a "Download Resume" button containing the file link in the hero section.
- [x] Remove the hover effect from the image in the hero section.
- [x] Clean up the body section by removing fragmented, small boxes to make the content presentation consistent and continuous.

**5. Skills Page**
- [x] Restructure the page to use fewer boxes and maintain consistent content.
- [x] Organize the skill boxes into a strictly 2-column layout.
- [x] Move the "Certificates" section so it appears immediately after the skill boxes, and improve its UI design.
- [x] **Important:** Leave the "Tools and Softwares" and "Spoken Languages" sections exactly as they are. Do not change them.

**6. Projects Page**
- [x] Organize the projects display into a 2-column grid layout.
- [x] Implement a paginator for the projects list.
- [x] Completely remove the "Technical Capabilities" section from this page.
- [x] Add an "Order a Project" call-to-action button.

**7. Hire Me Page**
- [x] Restructure the layout to use fewer boxes and maintain consistent content.
- [x] Add Telegram, LinkedIn, and GitHub links/addresses to the contact information section.
- [x] Add sequential order numbers to the FAQs.
