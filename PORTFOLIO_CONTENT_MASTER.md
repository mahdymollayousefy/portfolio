# Portfolio Content Master Archive

## Project Summary
- **Detected Locales:**
  - **English (`en`)** — Default / Fallback language (LTR)
  - **German (`de` / Deutsch)** (LTR)
  - **Dutch (`nl` / Nederlands)** (LTR)
  - **Persian (`fa` / فارسی - Farsi)** (RTL, Vazirmatn font)
- **Translation Method:** 
  - **Frontend:** Modular JavaScript translation dictionaries (`*.locales.js`) merged dynamically by `frontend/src/i18n.js` using `i18next`, `react-i18next`, and `i18next-browser-languagedetector`. Dynamic bidirectional layout management (`dir="rtl"` vs. `dir="ltr"`).
  - **Backend:** `django-modeltranslation` for database models (`Project.title` and `Project.description` registered across `en`, `de`, `nl`, `fa`).
- **Total Sections Extracted:** 21 Distinct Sections (encompassing 100% of frontend pages, components, layouts, metadata, dictionary keys, orphaned keys, and backend system copy).
- **Zero Loss Guarantee:** Every sentence, label, placeholder, error message, fallback, and hardcoded string is documented verbatim without truncation, summarization, or ellipses.

---

## Internationalization (i18n) Audit & Gap Analysis

| Finding Type | Element / Key | Location | Details & Recommendation |
| :--- | :--- | :--- | :--- |
| **Resolved Key** | `tech_stack` | `src/app/project/page.jsx:167` | Resolved. Added to `Projects.locales.js` across all 4 languages (`Tech Stack`, `Tech-Stack`, `Tech Stack`, `استک فناوری`). |
| **Resolved Key** | `send_another` | `src/app/work-with-me/page.jsx:133` | Resolved. Added to `WorkWithMe.locales.js` across all 4 languages (`Send Another Request`, `Weitere Anfrage senden`, `Nog یک verzoek sturen`, `ارسال درخواستی دیگر`). |
| **Resolved Key** | `other` | `src/app/skills/page.jsx:49` | Resolved. Added to `Skills.locales.js` across all 4 languages (`Other`, `Sonstiges`, `Overig`, `سایر`). |
| **Orphaned Key (Unused)** | `home_desc` | `src/locales/Home.locales.js` | Defined in all 4 languages ("A Backend Engineer building secure, scalable, and production-ready systems with Python and Django.") but never referenced in `src/app/page.jsx`. |
| **Orphaned Key (Unused)** | `capabilities_title` & `capabilities_desc` | `src/locales/Projects.locales.js` | Section was removed from the Projects UI per task checklist, but keys remain in dictionary. |
| **Orphaned Keys (Unused)** | `systems_online`, `systems_offline`, `checking` | `src/components/Footer.locales.js` | Defined in all 4 languages for system status monitoring, but no longer rendered in `Footer.jsx`. |
| **Orphaned Key (Bypassed)**| `sending` | `src/locales/WorkWithMe.locales.js` | Defined in all 4 languages ("Sending..."), but the submit button renders an animated SVG spinner rather than `t('sending')`. |
| **Hardcoded SEO Metadata** | Page `<title>` & `<meta description>` | `src/app/layout.jsx:37-38` | Hardcoded in English across all routes; updated to Backend Software Engineer specifications. |
| **Hardcoded Microcopy** | Tools & Software Lists | `src/app/skills/page.jsx:104-107` | Updated to 4 backend, database, DevOps, and AI categories in component state. |
| **Hardcoded Microcopy** | Social Links & Labels | `Footer.jsx` & `work-with-me/page.jsx` | "GitHub", "LinkedIn", "Telegram", "Email", and username handles are hardcoded literals. |
| **Resolved Field** | Skill Categories in Persian | `src/locales/Skills.locales.js` | Synchronized categories in Persian (`بک‌اند`, `دواپس`, `هوش مصنوعی و اتوماسیون`). |
| **Locale Naming Mismatch** | Dutch Label in Header | `src/components/Header.jsx:46` | Dropdown displays `"Dutch"` in English rather than the native endonym `"Nederlands"`. |

---

## 1. Global Document Metadata & SEO
- **Source File(s):** `frontend/src/app/layout.jsx`
- **UI Location:** Global HTML `<head>` & Root Layout

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Browser Page Title | *[Hardcoded Literal]* | `Mahdy Mollayousefy — Backend Software Engineer (Python & Django)` | `[MISSING TRANSLATION]` *(Hardcoded EN used)* | `[MISSING TRANSLATION]` *(Hardcoded EN used)* | `[MISSING TRANSLATION]` *(Hardcoded EN used)* |
| Meta Description | *[Hardcoded Literal]* | `Portfolio of Mahdy Mollayousefy — Backend Software Engineer specializing in Python, Django, DRF, PostgreSQL, Redis, Celery, Docker, and Nginx on Ubuntu, delivering complete full-stack solutions powered by AI agents.` | `[MISSING TRANSLATION]` *(Hardcoded EN used)* | `[MISSING TRANSLATION]` *(Hardcoded EN used)* | `[MISSING TRANSLATION]` *(Hardcoded EN used)* |
| Document Language Attribute | `lang` dynamic binding | `en` | `de` | `nl` | `fa` |
| Text Direction Attribute | `dir` dynamic binding | `ltr` | `ltr` | `ltr` | `rtl` |
| Primary Font Family | Dynamic Class | `font-sans` | `font-sans` | `font-sans` | `font-vazirmatn` |
| Favicon Path | *[Hardcoded Literal]* | `/logo.jpg` | `/logo.jpg` | `/logo.jpg` | `/logo.jpg` |
| Theme Color | *[Hardcoded Literal]* | `#0f172a` | `#0f172a` | `#0f172a` | `#0f172a` |

---

## 2. Header & Navigation Bar
- **Source File(s):** `frontend/src/components/Header.jsx` | `frontend/src/components/Header.locales.js`
- **UI Location:** Fixed Top Navigation Bar (Desktop & Mobile Drawer)

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Brand Name | *[Hardcoded Literal]* | `Mahdy` | `Mahdy` | `Mahdy` | `Mahdy` |
| Brand Logo Alt Text | *[Hardcoded Literal]* | `Logo` | `Logo` | `Logo` | `Logo` |
| Navigation: Home | `home` | `Home` | `Startseite` | `Startpagina` | `خانه` |
| Navigation: Projects | `projects` | `Projects` | `Projekte` | `Projecten` | `پروژه ها` |
| Navigation: Skills | `nav_skills` | `Skills` | `Fähigkeiten` | `Vaardigheden` | `مهارت ها` |
| Navigation: Work With Me | `work_with_me` | `Work With Me` | `Zusammenarbeiten` | `Samenwerken` | `همکاری با من` |
| Navigation: Legal | `legal` | `Legal` | `Rechtliches` | `Juridisch` | `قوانین و مقررات` |
| Language Dropdown: EN | *[Hardcoded in array]* | `English` (🇬🇧) | `English` (🇬🇧) | `English` (🇬🇧) | `English` (🇬🇧) |
| Language Dropdown: DE | *[Hardcoded in array]* | `Deutsch` (🇩🇪) | `Deutsch` (🇩🇪) | `Deutsch` (🇩🇪) | `Deutsch` (🇩🇪) |
| Language Dropdown: NL | *[Hardcoded in array]* | `Dutch` (🇳🇱) | `Dutch` (🇳🇱) | `Dutch` (🇳🇱) | `Dutch` (🇳🇱) |
| Language Dropdown: FA | *[Hardcoded in array]* | `فارسی` (🇮🇷) | `فارسی` (🇮🇷) | `فارسی` (🇮🇷) | `فارسی` (🇮🇷) |
| Language Toggle Aria-Label | *[Hardcoded Literal]* | `Toggle language` | `Toggle language` | `Toggle language` | `Toggle language` |
| Theme Toggle Aria-Label | *[Hardcoded Literal]* | `Toggle theme` | `Toggle theme` | `Toggle theme` | `Toggle theme` |

---

## 3. Footer Section
- **Source File(s):** `frontend/src/components/Footer.jsx` | `frontend/src/components/Footer.locales.js`
- **UI Location:** Global Page Footer (Bottom Fold)

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Copyright Notice | `all_rights_reserved` | `All rights reserved.` | `Alle Rechte vorbehalten.` | `Alle rechten voorbehouden.` | `تمامی حقوق محفوظ است.` |
| Mission Tagline | `tagline` | `Architecting secure Django backends, scalable Linux deployments, and AI-accelerated web systems.` | `Architektur sicherer Django-Backends, skalierbarer Linux-Deployments und KI-beschleunigter Websysteme.` | `Het ontwerpen van veilige Django-backends, schaalbare Linux-implementaties en AI-versnelde websystemen.` | `معماری بک‌اندهای امن جنگو، استقرارهای مقیاس‌پذیر لینوکس و سیستم‌های وب شتاب‌یافته با هوش مصنوعی.` |
| Navigation: Home | `home` | `Home` | `Startseite` | `Startpagina` | `خانه` |
| Navigation: Skills | `nav_skills` | `Skills` | `Fähigkeiten` | `Vaardigheden` | `مهارت ها` |
| Navigation: Work With Me | `work_with_me` | `Work With Me` | `Zusammenarbeiten` | `Samenwerken` | `همکاری با من` |
| Navigation: Legal | `legal` | `Legal` | `Rechtliches` | `Juridisch` | `قوانین و مقررات` |
| Social Link 1 Label | *[Hardcoded Literal]* | `GitHub` | `GitHub` | `GitHub` | `GitHub` |
| Social Link 2 Label | *[Hardcoded Literal]* | `LinkedIn` | `LinkedIn` | `LinkedIn` | `LinkedIn` |
| Social Link 3 Label | *[Hardcoded Literal]* | `Telegram` | `Telegram` | `Telegram` | `Telegram` |
| Social Link 4 Label | *[Hardcoded Literal]* | `Email` | `Email` | `Email` | `Email` |
| Status: Online *(Unused)* | `systems_online` | `Systems Online` | `Systeme Online` | `Systemen Online` | `سیستم‌ها آنلاین` |
| Status: Offline *(Unused)*| `systems_offline` | `Systems Offline` | `Systeme Offline` | `Systemen Offline` | `سیستم‌ها آفلاین` |
| Status: Checking *(Unused)*| `checking` | `Checking...` | `Überprüfung...` | `Controleren...` | `در حال بررسی...` |

---

## 4. Homepage — Hero Section
- **Source File(s):** `frontend/src/app/page.jsx` | `frontend/src/locales/Home.locales.js`
- **UI Location:** Homepage (`/`) > Top Hero Fold

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Availability Chip | `available` | `Available for Backend & End-to-End Projects` | `Verfügbar für Backend- & End-to-End-Projekte` | `Beschikbaar voor Backend- & End-to-End-projecten` | `آماده همکاری در پروژه‌های بک‌اند و اند-تو-اند` |
| Hero Heading (Part 1) | `home_title_part1` | `Backend Engineer &` | `Backend Engineer &` | `Backend Engineer &` | `مهندس بک‌اند و` |
| Hero Heading (Part 2) | `home_title_part2` | `Django Specialist` | `Django-Spezialist` | `Django Specialist` | `متخصص جنگو` |
| Primary CTA: Projects | `view_work` | `View Live Projects` | `Live-Projekte ansehen` | `Bekijk Live Projecten` | `مشاهده پروژه‌های زنده` |
| Secondary CTA: Hire | `hire_me_btn` | `Work With Me` | `Mit mir arbeiten` | `Werk Met Mij` | `همکاری با من` |
| Tertiary CTA: Resume | `download_resume` | `Download Resume` | `Lebenslauf herunterladen` | `Download CV` | `دانلود رزومه` |
| Avatar Floating Badge | `fullstack_dev` | `Mahdy Mollayousefy` | `Mahdy Mollayousefy` | `Mahdy Mollayousefy` | `Mahdy Mollayousefy` |
| Avatar Image Alt Text | *[Hardcoded Literal]* | `Mahdy Mollayousefy — Backend Software Engineer` | `[MISSING TRANSLATION]` *(Hardcoded)* | `[MISSING TRANSLATION]` *(Hardcoded)* | `[MISSING TRANSLATION]` *(Hardcoded)* |
| Standalone Bio *(Unused)*| `home_desc` | `A Backend Engineer building secure, scalable, and production-ready systems with Python and Django.` | `Ein Backend-Entwickler, der sichere, skalierbare und produktionsreife Systeme mit Python und Django entwickelt.` | `Een Backend Engineer die veilige, schaalbare en productierijpe systemen bouwt met Python en Django.` | `یک مهندس بک‌اند در حال ساخت سیستم‌های امن، مقیاس‌پذیر و آماده تولید با پایتون و جنگو.` |

### Element: Hero Section — Main Elevator Pitch
- **Source File:** `frontend/src/app/page.jsx:34` (`description`)
- **[English (`en`)]:**
  > I'm Mahdy Mollayousefy, a Backend Software Engineer with 3+ years of experience in Python, Django, and Django REST Framework. I architect secure APIs, manage PostgreSQL, Redis, and Celery workflows, deploy containerized systems with Docker and Nginx on Ubuntu servers, and leverage advanced AI agents (Cursor & Antigravity) to deliver secure Next.js frontends.
- **[German (`de`)]:**
  > Ich bin Mahdy Mollayousefy, ein Backend Software Engineer mit 3+ Jahren Erfahrung in Python, Django und dem Django REST Framework. Ich entwerfe sichere APIs, verwalte Workflows mit PostgreSQL, Redis und Celery, deploye containerisierte Systeme mit Docker und Nginx auf Ubuntu-Servern und nutze fortschrittliche KI-Agenten (Cursor & Antigravity), um sichere Next.js-Frontends bereitzustellen.
- **[Dutch (`nl`)]:**
  > Ik ben Mahdy Mollayousefy, een Backend Software Engineer met 3+ jaar ervaring in Python, Django en Django REST Framework. Ik ontwerp veilige API's, beheer PostgreSQL-, Redis- en Celery-workflows, implementeer gecontaineriseerde systemen met Docker en Nginx op Ubuntu-servers en benut geavanceerde AI-agenten (Cursor & Antigravity) om veilige Next.js-frontends te leveren.
- **[Persian (`fa`)]:**
  > من مهدی ملایوسفی هستم، مهندس نرم‌افزار بک‌اند با ۳+ سال تجربه تخصصی در پایتون، جنگو و جنگو رست فریم‌ورک (DRF). من APIهای امن را معماری می‌کنم، جریان‌های کاری PostgreSQL، Redis و Celery را مدیریت می‌نمایم، سیستم‌های کانتینری را با داکر و Nginx روی سرورهای ابونتو مستقر می‌کنم و از ایجنت‌های هوش مصنوعی پیشرفته (Cursor و Antigravity) برای تحویل فرانت‌اندهای امن Next.js بهره می‌برم.

---

## 5. Homepage — About Me Section
- **Source File(s):** `frontend/src/app/page.jsx` | `frontend/src/locales/Home.locales.js`
- **UI Location:** Homepage (`/`) > Second Section

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Section Title | `about_me_title` | `About Me` | `Über mich` | `Over Mij` | `درباره من` |

### Element: About Me — Complete Biography
- **Source File:** `frontend/src/app/page.jsx:77` (`about_me_desc`)
- **[English (`en`)]:**
  > Hi there! I am a Backend Software Engineer with over 3 years of hands-on experience building robust web backends and APIs using Python, Django, and Django REST Framework (DRF). My core focus is designing clean database architectures with PostgreSQL, handling asynchronous background processing and caching with Celery and Redis, and documenting and testing APIs thoroughly using Swagger (OpenAPI) and Postman.
  >
  > Beyond writing backend code, I handle the complete lifecycle of server deployment and infrastructure management. I containerize applications using Docker and Docker Compose, configure Nginx as a high-performance reverse proxy, and deploy and maintain live production systems on Ubuntu Linux servers. Currently, I have 4 live production projects running reliably in the real world.
  >
  > While my primary expertise lies strictly in backend engineering and server infrastructure, I am power-user of modern AI coding agents—specifically Cursor and Antigravity. By directing these AI agents with strict architectural and security guidelines, I build and integrate responsive, security-hardened Next.js and React.js frontends for my backend systems, allowing me to deliver complete, end-to-end applications independently.
  >
  > I hold a Bachelor's degree in Computer Engineering from Islamic Azad University, Karaj Branch. As a native Persian speaker fluent in English (C1), I collaborate effectively in international and remote engineering teams.
- **[German (`de`)]:**
  > Hallo! Ich bin ein Backend Software Engineer mit mehr als 3 Jahren praktischer Erfahrung im Aufbau robuster Web-Backends und APIs mit Python, Django und dem Django REST Framework (DRF). Mein Kernfokus liegt auf der Gestaltung sauberer Datenbankarchitekturen mit PostgreSQL, der asynchronen Hintergrundverarbeitung und dem Caching mit Celery und Redis sowie der gründlichen Dokumentation und dem Testen von APIs mit Swagger (OpenAPI) und Postman.
  >
  > Neben dem Schreiben von Backend-Code übernehme ich den gesamten Lebenszyklus des Server-Deployments und Infrastrukturmanagements. Ich containerisiere Anwendungen mit Docker und Docker Compose, konfiguriere Nginx als leistungsstarken Reverse Proxy und deploye und betreue laufende Produktionssysteme auf Ubuntu-Linux-Servern. Derzeit habe ich 4 Live-Produktionsprojekte, die zuverlässig in der Praxis laufen.
  >
  > Obwohl meine primäre Expertise im Backend-Engineering und in der Serverinfrastruktur liegt, bin ich Power-User moderner KI-Coding-Agenten – insbesondere Cursor und Antigravity. Indem ich diese KI-Agenten mit strengen Architektur- und Sicherheitsrichtlinien leite, entwickle und integriere ich responsive, sicherheitsgehärtete Next.js- und React.js-Frontends für meine Backend-Systeme, sodass ich vollständige End-to-End-Anwendungen eigenständig bereitstellen kann.
  >
  > Ich habe einen Bachelor-Abschluss in Computer Engineering von der Islamic Azad University, Karaj Branch. Als persischer Muttersprachler mit fließenden Englischkenntnissen (C1) arbeite ich effektiv in internationalen und Remote-Engineering-Teams zusammen.
- **[Dutch (`nl`)]:**
  > Hallo! Ik ben een Backend Software Engineer met meer dan 3 jaar praktijkervaring in het bouwen van robuuste webbackends en API's met behulp van Python, Django en Django REST Framework (DRF). Mijn kernfocus ligt op het ontwerpen van schone database-architecturen met PostgreSQL, het afhandelen van asynchrone achtergrondverwerking en caching met Celery en Redis, en het grondig documenteren en testen van API's met behulp van Swagger (OpenAPI) en Postman.
  >
  > Naast het schrijven van backendcode beheer ik de complete levenscyclus van serverimplementatie en infrastructuurbeheer. Ik containeriseer applicaties met Docker en Docker Compose, configureer Nginx als hoogwaardige reverse proxy en implementeer en onderhoud live productiesystemen op Ubuntu Linux-servers. Momenteel heb ik 4 live productieprojecten die betrouwbaar draaien in de echte wereld.
  >
  > Hoewel mijn primaire expertise strikt ligt in backend engineering en serverinfrastructuur, ben ik een power-user van moderne AI-coding-agenten—met name Cursor en Antigravity. Door deze AI-agenten te sturen met strikte architecturale en beveiligingsrichtlijnen, bouw en integreer ik responsieve, beveiligde Next.js- en React.js-frontends voor mijn backendsystemen, waardoor ik complete, end-to-end applicaties zelfstandig kan leveren.
  >
  > Ik heb een bachelordiploma in Computer Engineering van de Islamic Azad University, afdeling Karaj. Als moedertaalspreker Perzisch en vloeiend in het Engels (C1), werk ik effectief samen in internationale teams op afstand.
- **[Persian (`fa`)]:**
  > سلام! من یک مهندس نرم‌افزار بک‌اند با بیش از ۳ سال تجربه عملی در ساخت بک‌اندهای قدرتمند وب و API با استفاده از پایتون، جنگو و جنگو رست فریم‌ورک (DRF) هستم. تمرکز اصلی من طراحی معماری تمیز پایگاه داده با PostgreSQL، مدیریت پردازش‌های ناهمگام در پس‌زمینه و کشینگ با Celery و Redis، و مستندسازی و تست دقیق APIها با Swagger (OpenAPI) و Postman است.
  >
  > فراتر از کدنویسی بک‌اند، من چرخه کامل استقرار سرور و مدیریت زیرساخت را بر عهده می‌گیرم. من اپلیکیشن‌ها را با داکر و Docker Compose کانتینری می‌کنم، Nginx را به عنوان ریورس پروکسی با کارایی بالا کانفیگ می‌نمایم و سیستم‌های زنده تولیدی را روی سرورهای ابونتو لینوکس مستقر و نگهداری می‌کنم. در حال حاضر، ۴ پروژه عملیاتی زنده دارم که با اطمینان کامل در دنیای واقعی در حال اجرا هستند.
  >
  > با وجود اینکه تخصص اصلی من کاملاً بر مهندسی بک‌اند و زیرساخت سرور متمرکز است، اما کاربر حرفه‌ای ایجنت‌های مدرن کدنویسی هوش مصنوعی—به‌ویژه Cursor و Antigravity—هستم. با هدایت این ایجنت‌ها تحت اصول سخت‌گیرانه معماری و امنیتی، فرانت‌اندهای واکنش‌گرا و امن Next.js و React.js را برای سیستم‌های بک‌اند خود توسعه داده و ادغام می‌کنم؛ که این موضوع به من امکان می‌دهد پروژه‌های کامل و End-to-End را به صورت مستقل تحویل دهم.
  >
  > من دارای مدرک کارشناسی مهندسی کامپیوتر از دانشگاه آزاد اسلامی واحد کرج هستم. به عنوان گوینده زبان مادری فارسی و مسلط به زبان انگلیسی (C1)، ارتباط و همکاری موثری در تیم‌های بین‌المللی و دورکار دارم.

---

## 6. Homepage — Quick Stats Section
- **Source File(s):** `frontend/src/app/page.jsx` | `frontend/src/locales/Home.locales.js`
- **UI Location:** Homepage (`/`) > Third Section (Divider Banner)

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Stat 1 Number | `stats_exp` | `3+` | `3+` | `3+` | `3+` |
| Stat 1 Description | `stats_exp_desc` | `Years Backend Experience` | `Jahre Backend-Erfahrung` | `Jaar Backend-ervaring` | `سال تجربه تخصصی بک‌اند` |
| Stat 2 Number | `stats_projects` | `4` | `4` | `4` | `4` |
| Stat 2 Description | `stats_projects_desc`| `Live Production Projects` | `Live-Produktionsprojekte` | `Live Productieprojecten`| `پروژه زنده در محیط عملیاتی` |
| Stat 3 Number | `stats_clients` | `100%` | `100%` | `100%` | `100%` |
| Stat 3 Description | `stats_clients_desc` | `Client Satisfaction` | `Kundenzufriedenheit` | `Klanttevredenheid` | `رضایت کارفرمایان` |

---

## 7. Homepage — Core Services Section
- **Source File(s):** `frontend/src/app/page.jsx` | `frontend/src/locales/Home.locales.js`
- **UI Location:** Homepage (`/`) > Fourth Section

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Section Title | `services_title` | `Core Services` | `Kernkompetenzen` | `Kerndiensten` | `خدمات اصلی` |
| Section Subtitle | `services_desc` | `Reliable backend engineering, Linux server deployment, and AI-accelerated project delivery.` | `Zuverlässiges Backend-Engineering, Linux-Server-Deployment und KI-beschleunigte Projektabwicklung.` | `Betrouwbare backend engineering, Linux serverimplementatie en AI-versnelde projectoplevering.` | `مهندسی مطمئن بک‌اند، استقرار سرور لینوکس و تحویل سریع پروژه‌ها با هوش مصنوعی.` |
| Service 1 Title | `service_1` | `Backend & REST API Engineering` | `Backend- & REST-API-Engineering` | `Backend & REST API Engineering` | `مهندسی بک‌اند و REST API` |
| Service 1 Description | `service_1_desc` | `Developing secure, scalable backend architectures and RESTful APIs using Python, Django, Django REST Framework, PostgreSQL, Redis, and Celery, complete with Swagger documentation and Postman testing.` | `Entwicklung sicherer, skalierbarer Backend-Architekturen und RESTful APIs mit Python, Django, Django REST Framework, PostgreSQL, Redis und Celery, komplett mit Swagger-Dokumentation und Postman-Tests.` | `Ontwikkeling van veilige, schaalbare backend-architecturen en RESTful API's met behulp van Python, Django, Django REST Framework, PostgreSQL, Redis en Celery, compleet met Swagger-documentatie en Postman-testen.` | `توسعه معماری‌های امن و مقیاس‌پذیر بک‌اند و RESTful API با استفاده از پایتون، جنگو، Django REST Framework، PostgreSQL، Redis و Celery، همراه با مستندات Swagger و تست کامل با Postman.` |
| Service 2 Title | `service_2` | `DevOps & Ubuntu Server Deployment` | `DevOps & Ubuntu-Server-Deployment` | `DevOps & Ubuntu Server Deployment` | `دواپس و استقرار سرور ابونتو` |
| Service 2 Description | `service_2_desc` | `Containerizing applications with Docker & Docker Compose, configuring Nginx web servers and SSL, and deploying reliable, high-uptime production environments on Ubuntu Linux.` | `Containerisierung von Anwendungen mit Docker & Docker Compose, Konfiguration von Nginx-Webservern und SSL sowie Bereitstellung zuverlässiger Produktionsumgebungen mit hoher Verfügbarkeit auf Ubuntu Linux.` | `Containerisatie van applicaties met Docker & Docker Compose, configuratie van Nginx-webservers en SSL, en het implementeren van betrouwbare productieomgevingen met hoge uptime op Ubuntu Linux.` | `کانتینری کردن اپلیکیشن‌ها با داکر و Docker Compose، پیکربندی وب‌سرور Nginx و گواهی SSL، و استقرار محیط‌های عملیاتی پایدار با آپتایم بالا روی اوبونتو لینوکس.` |
| Service 3 Title | `service_3` | `AI-Accelerated End-to-End Delivery` | `KI-beschleunigte End-to-End-Lieferung` | `AI-versnelde End-to-End Oplevering` | `تحویل End-to-End با شتاب هوش مصنوعی` |
| Service 3 Description | `service_3_desc` | `Utilizing advanced AI agents (Cursor & Antigravity) to build security-hardened Next.js and React.js user interfaces on top of rock-solid Django backends for complete product delivery.` | `Nutzung fortschrittlicher KI-Agenten (Cursor & Antigravity) zur Erstellung sicherheitsgehärteter Next.js- und React.js-Benutzeroberflächen auf soliden Django-Backends für eine vollständige Produktbereitstellung.` | `Inzet van geavanceerde AI-agenten (Cursor & Antigravity) om beveiligde Next.js- en React.js-gebruikersinterfaces te bouwen bovenop solide Django-backends voor complete productoplevering.` | `به‌کارگیری ایجنت‌های پیشرفته هوش مصنوعی (Cursor و Antigravity) برای ساخت رابط‌های کاربری امن و مستحکم Next.js و React.js متصل به بک‌اندهای قدرتمند جنگو جهت تحویل کامل محصول.` |

---

## 8. Homepage — Areas of Expertise Section
- **Source File(s):** `frontend/src/app/page.jsx` | `frontend/src/locales/Home.locales.js`
- **UI Location:** Homepage (`/`) > Fifth Section

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Section Title | `expertise_title` | `Areas of Expertise` | `Fachgebiete` | `Expertisegebieden` | `حوزه‌های تخصص` |
| Section Subtitle | `expertise_desc` | `Deep focus on backend stability, database performance, and production server management.` | `Starker Fokus auf Backend-Stabilität, Datenbankleistung und Produktionsserver-Management.` | `Diepe focus op backendstabiliteit, databaseprestaties en beheer van productieservers.` | `تمرکز عمیق بر پایداری بک‌اند، کارایی پایگاه داده و مدیریت سرورهای عملیاتی.` |
| Domain 1 Title | `backend_title` | `Backend Architecture & APIs` | `Backend-Architektur & APIs` | `Backend Architectuur & API's` | `معماری بک‌اند و APIها` |
| Domain 1 Description | `backend_desc` | `Python, Django, DRF, PostgreSQL, Redis, Celery. Building secure APIs with strict validation, background task queues, Swagger documentation, and Postman testing.` | `Python, Django, DRF, PostgreSQL, Redis, Celery. Erstellung sicherer APIs mit strikter Validierung, Hintergrund-Task-Queues, Swagger-Dokumentation und Postman-Tests.` | `Python, Django, DRF, PostgreSQL, Redis, Celery. Bouwen van veilige API's met strikte validatie, achtergrondtaakwachtrijen, Swagger-documentatie en Postman-testen.` | `پایتون، جنگو، DRF، PostgreSQL، Redis، Celery. ساخت APIهای امن با اعتبارسنجی دقیق، صف‌های پردازش در پس‌زمینه، مستندسازی Swagger و تست با Postman.` |
| Domain 2 Title | `data_title` | `Linux Server & Docker Deployment` | `Linux-Server & Docker-Deployment` | `Linux Server & Docker Deployment` | `استقرار سرور لینوکس و داکر` |
| Domain 2 Description | `data_desc` | `Ubuntu, Docker, Docker Compose, Nginx, Git & GitHub. Orchestrating containerized deployments and managing production Linux servers with high availability.` | `Ubuntu, Docker, Docker Compose, Nginx, Git & GitHub. Orchestrierung containerisierter Deployments und Verwaltung von Produktions-Linux-Servern mit hoher Verfügbarkeit.` | `Ubuntu, Docker, Docker Compose, Nginx, Git & GitHub. Orkestratie van gecontaineriseerde implementaties en beheer van productie-Linux-servers met hoge beschikbaarheid.` | `اوبونتو، داکر، Docker Compose، Nginx، گیت و گیت‌هاب. ارکستراسیون استقرارهای کانتینری و مدیریت سرورهای لینوکس در محیط عملیاتی با دسترس‌پذیری بالا.` |
| Domain 3 Title | `ai_title` | `AI-Driven Workflow & Secure UI` | `KI-gestützter Workflow & sichere UI` | `AI-gestuurde Workflow & Veilige UI` | `جریان کاری با هوش مصنوعی و UI امن` |
| Domain 3 Description | `ai_desc` | `Leveraging Cursor, Antigravity, and AI agents to accelerate backend workflows and generate secure, standards-compliant Next.js & React.js frontends.` | `Nutzung von Cursor, Antigravity und KI-Agenten zur Beschleunigung von Backend-Workflows und Generierung sicherer, standardkonformer Next.js- & React.js-Frontends.` | `Benutten van Cursor, Antigravity en AI-agenten om backendworkflows te versnellen en veilige, standaardconforme Next.js & React.js-frontends te genereren.` | `بهره‌گیری از Cursor، Antigravity و ایجنت‌های هوش مصنوعی برای سرعت بخشیدن به فرآیندهای بک‌اند و تولید فرانت‌اندهای امن و منطبق بر استاندارد با Next.js و React.js.` |

---

## 9. Homepage — Work Process Section
- **Source File(s):** `frontend/src/app/page.jsx` | `frontend/src/locales/Home.locales.js`
- **UI Location:** Homepage (`/`) > Sixth Section

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Section Title | `process_title` | `My Work Process` | `Mein Arbeitsprozess` | `Mijn Werkwijze` | `فرآیند کاری من` |
| Section Subtitle | `process_desc` | `How I architect, test, and deploy production-ready backend systems and web applications.` | `Wie ich produktionsreife Backend-Systeme und Webanwendungen architektonisch entwerfe, teste und deploye.` | `Hoe ik productierijpe backendsystemen en webapplicaties ontwerp, test en implementeer.` | `چگونه ایده‌ها را به نرم‌افزارهای آماده تولید تبدیل می‌کنم.` |
| Step 1 Ordinal | *[Hardcoded]* | `01` | `01` | `01` | `01` |
| Step 1 Title | `discovery` | `01. Requirements & API Design` | `01. Anforderungen & API-Design` | `01. Vereisten & API-ontwerp` | `۰۱. تحلیل نیازمندی‌ها و طراحی API` |
| Step 1 Description | `discovery_desc` | `Analyzing business logic, defining system requirements, and structuring RESTful API endpoints.` | `Analyse der Geschäftslogik, Definition der Systemanforderungen und Strukturierung von RESTful-API-Endpunkten.` | `Analyseren van bedrijfslogica, definiëren van systeemvereisten en structureren van RESTful API-eindpunten.` | `تحلیل منطق کسب‌وکار، تعریف نیازمندی‌های سیستم و ساختاربندی اندپوینت‌های RESTful API.` |
| Step 2 Ordinal | *[Hardcoded]* | `02` | `02` | `02` | `02` |
| Step 2 Title | `architecture` | `02. Database & Backend Architecture` | `02. Datenbank- & Backend-Architektur` | `02. Database & Backend Architectuur` | `۰۲. معماری دیتابیس و بک‌اند` |
| Step 2 Description | `architecture_desc` | `Designing normalized PostgreSQL schemas, configuring Redis/Celery queues, and setting up security policies.` | `Entwurf normalisierter PostgreSQL-Schemas, Konfiguration von Redis/Celery-Queues und Einrichtung von Sicherheitsrichtlinien.` | `Ontwerpen van genormaliseerde PostgreSQL-schema's, configureren van Redis/Celery-wachtrijen en opzetten van beveiligingsbeleid.` | `طراحی شمای نرمال‌شده پایگاه داده PostgreSQL، پیکربندی صف‌های Redis و Celery و اعمال سیاست‌های امنیتی.` |
| Step 3 Ordinal | *[Hardcoded]* | `03` | `03` | `03` | `03` |
| Step 3 Title | `development` | `03. Development & API Testing` | `03. Entwicklung & API-Testing` | `03. Ontwikkeling & API-testen` | `۰۳. توسعه و تست API` |
| Step 3 Description | `development_desc` | `Writing clean Django/DRF code, testing endpoints via Postman & Swagger, and building secure Next.js frontends using AI agents.` | `Schreiben von sauberem Django/DRF-Code, Testen von Endpunkten über Postman & Swagger und Erstellen sicherer Next.js-Frontends mithilfe von KI-Agenten.` | `Schrijven van schone Django/DRF-code, testen van eindpunten via Postman & Swagger, en bouwen van veilige Next.js-frontends met behulp van AI-agenten.` | `نوشتن کد تمیز و بهینه جنگو/DRF، تست اندپوینت‌ها با Postman و Swagger و ساخت فرانت‌اندهای امن Next.js به کمک ایجنت‌های هوش مصنوعی.` |
| Step 4 Ordinal | *[Hardcoded]* | `04` | `04` | `04` | `04` |
| Step 4 Title | `deployment` | `04. Docker & Ubuntu Deployment` | `04. Docker & Ubuntu Deployment` | `04. Docker & Ubuntu Implementatie` | `۰۴. استقرار با داکر و اوبونتو` |
| Step 4 Description | `deployment_desc` | `Containerizing the stack with Docker, configuring Nginx on Ubuntu servers, and launching to production.` | `Containerisierung des Stacks mit Docker, Konfiguration von Nginx auf Ubuntu-Servern und Release in die Produktion.` | `Containerisatie van de stack met Docker, configuratie van Nginx op Ubuntu-servers en lancering naar productie.` | `کانتینری کردن کل استک با داکر، پیکربندی Nginx روی سرورهای ابونتو و راه‌اندازی موفق در محیط عملیاتی.` |

---

## 10. Projects Page — Header & Filtering
- **Source File(s):** `frontend/src/app/projects/page.jsx` | `frontend/src/locales/Projects.locales.js`
- **UI Location:** Projects Page (`/projects`) > Top Section & Filter Bar

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Title (Part 1) | `projects_title_part1` | `Featured` | `Ausgewählte` | `Uitgelichte` | `پروژه‌های` |
| Title (Part 2) | `projects_title_part2` | `Projects` | `Projekte` | `Projecten` | `برگزیده` |
| Hero Description | `projects_desc` | `Explore my 4 live production projects, showcasing my core expertise in Python/Django backend engineering, PostgreSQL & Redis architecture, Docker/Nginx deployment on Ubuntu, and AI-assisted Next.js frontend integration.` | `Entdecken Sie meine 4 Live-Produktionsprojekte, die meine Kernkompetenz im Python/Django-Backend-Engineering, in der PostgreSQL- & Redis-Architektur, im Docker/Nginx-Deployment auf Ubuntu und in der KI-gestützten Next.js-Frontend-Integration veranschaulichen.` | `Ontdek mijn 4 live productieprojecten die mijn kernexpertise tonen in Python/Django backend engineering, PostgreSQL- & Redis-architectuur, Docker/Nginx-implementatie op Ubuntu en AI-ondersteunde Next.js frontend-integratie.` | `از ۴ پروژه زنده و در حال اجرای من دیدن کنید که نشان‌دهنده تخصص اصلی من در مهندسی بک‌اند با پایتون و جنگو، معماری PostgreSQL و Redis، استقرار داکر و Nginx روی سرور اوبونتو و ادغام فرانت‌اند Next.js با کمک هوش مصنوعی است.` |
| CTA Button: Order | `order_project` | `Order a Project` | `Projekt bestellen` | `Project bestellen` | `سفارش پروژه` |
| Filter: All Projects | `filter_all` | `All Projects` | `Alle Projekte` | `Alle Projecten` | `همه پروژه‌ها` |
| Filter: Frontend *(Static)*| `filter_frontend` | `Frontend` | `Frontend` | `Frontend` | `فرانت‌اند` |
| Filter: Backend *(Static)* | `filter_backend` | `Backend` | `Backend` | `Backend` | `بک‌اند` |
| Filter: Full Stack *(Static)*| `filter_fullstack` | `Full Stack` | `Full Stack` | `Full Stack` | `فول استک` |
| Capabilities Title *(Unused)*| `capabilities_title`| `Technical Capabilities`| `Technische Fähigkeiten` | `Technische Capaciteiten`| `توانمندی‌های فنی` |
| Capabilities Desc *(Unused)* | `capabilities_desc` | `Leveraging cutting-edge technologies to solve complex problems.` | `Nutzung modernster Technologien zur Lösung komplexer Probleme.` | `Baanbrekende technologieën inzetten om complexe problemen op te lossen.` | `استفاده از فناوری‌های پیشرفته برای حل مسائل پیچیده.` |

---

## 11. Projects Page — Project Cards & States
- **Source File(s):** `frontend/src/app/projects/page.jsx` | `frontend/src/locales/Projects.locales.js`
- **UI Location:** Projects Page (`/projects`) > Grid & Empty States

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Empty State Title | `no_projects` | `No projects found` | `Keine Projekte gefunden`| `Geen projecten gevonden`| `پروژه‌ای یافت نشد` |
| Empty State Description| `no_projects_desc` | `Projects will appear here once they are added to the backend.` | `Projekte werden hier angezeigt, sobald sie im Backend hinzugefügt wurden.` | `Projecten verschijnen hier zodra ze aan de backend zijn toegevoegd.` | `پروژه‌ها پس از افزودن در بک‌اند در اینجا نمایش داده خواهند شد.` |
| Card Action: View | `view` | `View` | `Ansehen` | `Bekijken` | `مشاهده` |
| Card Action: Source Code| `code` | `Code` | `Code` | `Code` | `کد` |
| Card Action: Live Demo | `live_demo` | `Live Demo` | `Live-Demo` | `Live Demo` | `نمایش زنده` |
| Card Meta: Price Label | `estimated_price` | `Estimated Price` | `Geschätzter Preis` | `Geschatte Prijs` | `قیمت تقریبی` |
| Price Value Template | *[Hardcoded Literal]* | `Estimated Price: $[Amount]` | `Geschätzter Preis: $[Amount]` | `Geschatte Prijs: $[Amount]` | `قیمت تقریبی: $[Amount]` |
| Card Image Alt Attribute| *[Dynamic Binding]* | `[Project Title]` | `[Project Title]` | `[Project Title]` | `[Project Title]` |

---

## 12. Project Detail Page
- **Source File(s):** `frontend/src/app/project/page.jsx` | `frontend/src/locales/Projects.locales.js`
- **UI Location:** Single Project View (`/project?slug=...`)

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Back Link | `back_to_projects` | `Back to Projects` | `Zurück zu Projekten` | `Terug naar Projecten` | `بازگشت به پروژه‌ها` |
| 404 Title | `project_not_found` | `Project Not Found` | `Projekt nicht gefunden` | `Project niet gevonden` | `پروژه یافت نشد` |
| Tech Stack Section Title | `tech_stack` | `Tech Stack` | `Tech-Stack` | `Tech Stack` | `استک فناوری` |
| Source Code CTA | `code` *(Fallback: 'Source Code')*| `Code` *(Fallback: 'Source Code')*| `Code` *(Fallback: 'Source Code')*| `Code` *(Fallback: 'Source Code')*| `کد منبع` *(Fallback: 'Source Code')*|
| Live Demo CTA | `live_demo` *(Fallback: 'Live Demo')*| `Live Demo` | `Live-Demo` | `Live Demo` | `نمایش زنده` |
| Estimated Price Tag | `estimated_price` | `Estimated Price` | `Geschätzter Preis` | `Geschatte Prijs` | `قیمت تقریبی` |
| Carousel Image Alt Template| *[Hardcoded Literal]*| `[Project Title] - [Index]` | `[Project Title] - [Index]` | `[Project Title] - [Index]` | `[Project Title] - [Index]` |
| Carousel Arrow Prev Title | *[Hardcoded via plugin]* | `previous slide / item` | `previous slide / item` | `previous slide / item` | `previous slide / item` |
| Carousel Arrow Next Title | *[Hardcoded via plugin]* | `next slide / item` | `next slide / item` | `next slide / item` | `next slide / item` |

---

## 13. Skills Page — Header & Configuration
- **Source File(s):** `frontend/src/app/skills/page.jsx` | `frontend/src/locales/Skills.locales.js`
- **UI Location:** Skills Page (`/skills`) > Top Section & Empty States

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Title (Part 1) | `skills_title_part1` | `Technical` | `Technische` | `Technische` | `مهارت‌های` |
| Title (Part 2) | `skills_title_part2` | `Skills` | `Fähigkeiten` | `Vaardigheden` | `فنی` |
| Page Description | `skills_desc` | `A focused overview of my core backend engineering stack, server deployment tools, and AI-assisted development workflow.` | `Ein gezielter Überblick über meinen Kern-Backend-Engineering-Stack, Server-Deployment-Tools und den KI-gestützten Entwicklungs-Workflow.` | `Een gericht overzicht van mijn kernstack voor backend engineering, serverimplementatietools en de AI-ondersteunde ontwikkelingsworkflow.` | `نگاهی دقیق به استک اصلی مهندسی بک‌اند، ابزارهای استقرار سرور و فرآیند توسعه شتاب‌یافته با هوش مصنوعی من.` |
| Empty State Title | `no_skills` | `No skills found` | `Keine Fähigkeiten gefunden`| `Geen vaardigheden gevonden`| `مهارتی یافت نشد` |
| Empty State Description| `no_skills_desc` | `Skills will appear here once they are added.` | `Fähigkeiten werden hier angezeigt, sobald sie hinzugefügt wurden.` | `Vaardigheden verschijnen hier zodra ze zijn toegevoegd.` | `مهارت‌ها پس از افزودن در اینجا نمایش داده خواهند شد.` |
| Category Fallback | `other` | `Other` | `Sonstiges` | `Overig` | `سایر` |

---

## 14. Skills Page — Technical Skill Matrix (Long-Form)
- **Source File(s):** `frontend/src/app/skills/page.jsx` | `frontend/src/locales/Skills.locales.js` (`skills` array)
- **UI Location:** Skills Page (`/skills`) > Primary Skills Grid

### Skill 1: Python
- **Source Key:** `skills[0]` (`id: 1`)
- **Metadata:**
  - **Category:** `Backend` (de/nl: `Backend`, fa: `بک‌اند`)
  - **Icon:** `devicon-python-plain`
- **Name:**
  - **English (`en`):** `Python`
  - **German (`de`):** `Python`
  - **Dutch (`nl`):** `Python`
  - **Persian (`fa`):** `پایتون`
- **Description:**
  - **English (`en`):**
    > 3+ years of focused experience using Python as my primary programming language for backend web architecture, data processing, asynchronous task execution, and API integrations.
  - **German (`de`):**
    > 3+ Jahre gezielte Erfahrung mit Python als meiner primären Programmiersprache für Backend-Webarchitektur, Datenverarbeitung, asynchrone Aufgabenausführung und API-Integrationen.
  - **Dutch (`nl`):**
    > 3+ jaar gerichte ervaring met Python als mijn primaire programmeertaal voor backend webarchitectuur, gegevensverwerking, asynchrone taakuitvoering en API-integraties.
  - **Persian (`fa`):**
    > ۳+ سال تجربه متمرکز با پایتون به عنوان زبان برنامه‌نویسی اصلی من برای معماری وب در بک‌اند، پردازش داده‌ها، اجرای پردازش‌های ناهمگام و ادغام APIها.

### Skill 2: Django & Django REST Framework
- **Source Key:** `skills[1]` (`id: 2`)
- **Metadata:**
  - **Category:** `Backend` (de/nl: `Backend`, fa: `بک‌اند`)
  - **Icon:** `devicon-django-plain`
- **Name:**
  - **English (`en`):** `Django & Django REST Framework`
  - **German (`de`):** `Django & Django REST Framework`
  - **Dutch (`nl`):** `Django & Django REST Framework`
  - **Persian (`fa`):** `جنگو و جنگو رست فریم‌ورک`
- **Description:**
  - **English (`en`):**
    > My core specialty. Extensive experience building secure, scalable backend systems and RESTful APIs, implementing authentication, permissions, and complex business logic.
  - **German (`de`):**
    > Meine Kernspezialität. Umfangreiche Erfahrung im Aufbau sicherer, skalierbarer Backend-Systeme und RESTful APIs, Implementierung von Authentifizierung, Berechtigungen und komplexer Geschäftslogik.
  - **Dutch (`nl`):**
    > Mijn kernspecialiteit. Uitgebreide ervaring in het bouwen van veilige, schaalbare backendsystemen en RESTful API's, het implementeren van authenticatie, permissies en complexe bedrijfslogica.
  - **Persian (`fa`):**
    > تخصص اصلی من. تجربه گسترده در ساخت سیستم‌های امن و مقیاس‌پذیر بک‌اند و RESTful APIها، پیاده‌سازی احراز هویت، سطوح دسترسی و منطق تجاری پیچیده.

### Skill 3: PostgreSQL, Redis & Celery
- **Source Key:** `skills[2]` (`id: 3`)
- **Metadata:**
  - **Category:** `Backend` (de/nl: `Backend`, fa: `بک‌اند`)
  - **Icon:** `devicon-postgresql-plain`
- **Name:**
  - **English (`en`):** `PostgreSQL, Redis & Celery`
  - **German (`de`):** `PostgreSQL, Redis & Celery`
  - **Dutch (`nl`):** `PostgreSQL, Redis & Celery`
  - **Persian (`fa`):** `PostgreSQL، Redis و Celery`
- **Description:**
  - **English (`en`):**
    > Designing relational database schemas and optimizing queries in PostgreSQL, combined with Redis caching and Celery for managing asynchronous background tasks and scheduled jobs.
  - **German (`de`):**
    > Entwurf relationaler Datenbankschemata und Abfrageoptimierung in PostgreSQL, kombiniert mit Redis-Caching und Celery für die Verwaltung asynchroner Hintergrundaufgaben und geplanter Jobs.
  - **Dutch (`nl`):**
    > Ontwerpen van relationele databaseschema's en optimaliseren van queries in PostgreSQL, gecombineerd met Redis-caching en Celery voor het beheren van asynchrone achtergrondtaken en geplande jobs.
  - **Persian (`fa`):**
    > طراحی شمای پایگاه داده رابطه‌ای و بهینه‌سازی کوئری‌ها در PostgreSQL، همراه با کشینگ Redis و Celery جهت مدیریت تسک‌های ناهمگام در پس‌زمینه و جاب‌های زمان‌بندی‌شده.

### Skill 4: Swagger (OpenAPI) & Postman
- **Source Key:** `skills[3]` (`id: 4`)
- **Metadata:**
  - **Category:** `Backend` (de/nl: `Backend`, fa: `بک‌اند`)
  - **Icon:** `devicon-postman-plain`
- **Name:**
  - **English (`en`):** `Swagger (OpenAPI) & Postman`
  - **German (`de`):** `Swagger (OpenAPI) & Postman`
  - **Dutch (`nl`):** `Swagger (OpenAPI) & Postman`
  - **Persian (`fa`):** `Swagger (OpenAPI) و Postman`
- **Description:**
  - **English (`en`):**
    > Generating interactive OpenAPI/Swagger documentation for seamless frontend-backend integration and performing rigorous API endpoint testing, validation, and debugging using Postman.
  - **German (`de`):**
    > Generierung interaktiver OpenAPI/Swagger-Dokumentationen für eine nahtlose Frontend-Backend-Integration und Durchführung gründlicher API-Endpunkttests, Validierungen und Debugging mit Postman.
  - **Dutch (`nl`):**
    > Genereren van interactieve OpenAPI/Swagger-documentatie voor naadloze frontend-backend integratie en het uitvoeren van rigoureuze API-eindpunttests, validatie en debugging met behulp van Postman.
  - **Persian (`fa`):**
    > تولید مستندات تعاملی OpenAPI/Swagger برای یکپارچگی روان فرانت‌اند و بک‌اند، و انجام تست‌های دقیق، اعتبارسنجی و دیباگ اندپوینت‌های API با استفاده از Postman.

### Skill 5: Ubuntu, Docker & Nginx
- **Source Key:** `skills[4]` (`id: 5`)
- **Metadata:**
  - **Category:** `DevOps` (de/nl: `DevOps`, fa: `دواپس`)
  - **Icon:** `devicon-docker-plain`
- **Name:**
  - **English (`en`):** `Ubuntu, Docker & Nginx`
  - **German (`de`):** `Ubuntu, Docker & Nginx`
  - **Dutch (`nl`):** `Ubuntu, Docker & Nginx`
  - **Persian (`fa`):** `اوبونتو، داکر و Nginx`
- **Description:**
  - **English (`en`):**
    > Containerizing applications with Docker & Docker Compose, configuring Nginx reverse proxies and SSL certificates, and deploying and maintaining live projects on Ubuntu Linux servers.
  - **German (`de`):**
    > Containerisierung von Anwendungen mit Docker & Docker Compose, Konfiguration von Nginx-Reverse-Proxies und SSL-Zertifikaten sowie Bereitstellung und Wartung von Live-Projekten auf Ubuntu-Linux-Servern.
  - **Dutch (`nl`):**
    > Containerisatie van applicaties met Docker & Docker Compose, configuratie van Nginx reverse proxies en SSL-certificaten, en het implementeren en onderhouden van live projecten op Ubuntu Linux-servers.
  - **Persian (`fa`):**
    > کانتینری کردن اپلیکیشن‌ها با داکر و Docker Compose، کانفیگ ریورس پروکسی Nginx و گواهینامه‌های SSL، و استقرار و نگهداری پروژه‌های زنده روی سرورهای لینوکس اوبونتو.

### Skill 6: Git & GitHub
- **Source Key:** `skills[5]` (`id: 6`)
- **Metadata:**
  - **Category:** `DevOps` (de/nl: `DevOps`, fa: `دواپس`)
  - **Icon:** `devicon-git-plain`
- **Name:**
  - **English (`en`):** `Git & GitHub`
  - **German (`de`):** `Git & GitHub`
  - **Dutch (`nl`):** `Git & GitHub`
  - **Persian (`fa`):** `گیت و گیت‌هاب`
- **Description:**
  - **English (`en`):**
    > Proficient in version control, branching strategies, and managing production codebases and deployment workflows using Git and GitHub.
  - **German (`de`):**
    > Versiert in Versionskontrolle, Branching-Strategien und der Verwaltung von Produktions-Codebases sowie Deployment-Workflows mit Git und GitHub.
  - **Dutch (`nl`):**
    > Bedreven in versiebeheer, vertakkingsstrategieën en het beheren van productiecodebases en implementatieworkflows met behulp van Git en GitHub.
  - **Persian (`fa`):**
    > مسلط به کنترل نسخه، استراتژی‌های برنچینگ و مدیریت کدهای عملیاتی و جریان‌های کاری استقرار با استفاده از Git و GitHub.

### Skill 7: AI Agents (Cursor & Antigravity) & Secure Next.js UI
- **Source Key:** `skills[6]` (`id: 7`)
- **Metadata:**
  - **Category:** `AI & Automation` (de/nl: `AI & Automation`, fa: `هوش مصنوعی و اتوماسیون`)
  - **Icon:** `Cpu`
- **Name:**
  - **English (`en`):** `AI Agents (Cursor & Antigravity) & Secure Next.js UI`
  - **German (`de`):** `KI-Agenten (Cursor & Antigravity) & sichere Next.js UI`
  - **Dutch (`nl`):** `AI-agenten (Cursor & Antigravity) & Veilige Next.js UI`
  - **Persian (`fa`):** `ایجنت‌های هوش مصنوعی (Cursor و Antigravity) و UI امن با Next.js`
- **Description:**
  - **English (`en`):**
    > Expert in operating AI coding agents (Cursor, Antigravity) to accelerate development and build responsive, security-hardened Next.js and React.js frontends for my backend systems.
  - **German (`de`):**
    > Experte in der Bedienung von KI-Coding-Agenten (Cursor, Antigravity) zur Beschleunigung der Entwicklung und Erstellung responsiver, sicherheitsgehärteter Next.js- und React.js-Frontends für meine Backend-Systeme.
  - **Dutch (`nl`):**
    > Expert in het werken met AI-coding-agenten (Cursor, Antigravity) om ontwikkeling te versnellen en responsieve, beveiligde Next.js- en React.js-frontends te bouwen voor mijn backendsystemen.
  - **Persian (`fa`):**
    > مسلط به کار با ایجنت‌های کدنویسی هوش مصنوعی (Cursor و Antigravity) برای سرعت بخشیدن به توسعه و ساخت فرانت‌اندهای واکنش‌گرا و امن با Next.js و React.js برای سیستم‌های بک‌اند.

---

## 15. Skills Page — Certifications, Languages & Tools
- **Source File(s):** `frontend/src/app/skills/page.jsx` | `frontend/src/locales/Skills.locales.js`
- **UI Location:** Skills Page (`/skills`) > Bottom Sections

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Certifications Title | `certs_title` | `Certifications & Awards` | `Zertifikate & Auszeichnungen` | `Certificeringen & Prijzen` | `گواهینامه‌ها و افتخارات` |
| Certifications Subtitle | `certs_desc` | `Recognized qualifications and achievements in software engineering.` | `Anerkannte Qualifikationen und Erfolge im Software Engineering.` | `Erkende kwalificaties en prestaties in software engineering.` | `مدارک معتبر و دستاوردهای شناخته‌شده در زمینه مهندسی نرم‌افزار.` |
| Certification 1 Title | `cert_1` | `Bachelor's degree in Computer Engineering, Graduated` | `Bachelor in Computer Engineering, Abgeschlossen` | `Bachelordiploma in Computer Engineering, Afgestudeerd` | `لیسانس مهندسی کامپیوتر، فارغ التحصیل` |
| Spoken Languages Title | `langs_title` | `Spoken Languages` | `Gesprochene Sprachen` | `Gesproken Talen` | `زبان‌های ارتباطی` |
| Spoken Languages Subtitle| `langs_desc` | `Languages I use for daily communication and collaboration.` | `Sprachen, die ich für die tägliche Kommunikation und Zusammenarbeit nutze.` | `Talen die ik gebruik voor dagelijkse communicatie en samenwerking.` | `زبان‌هایی که برای ارتباطات و همکاری‌های روزمره استفاده می‌کنم.` |
| Language 1: English | `lang_en` | `English` | `Englisch` | `Engels` | `انگلیسی` |
| Language 1: Proficiency | `lang_en_prof` | `Fluent (C1)` | `Fluent (C1)` | `Fluent (C1)` | `Fluent (C1)` |
| Language 2: Persian | `lang_fa` | `Persian (Farsi)` | `Persisch (Farsi)` | `Perzisch (Farsi)` | `فارسی` |
| Language 2: Proficiency | `lang_fa_prof` | `Native` | `Native` | `Native` | `Native` |
| Tools & Software Title | `tools_title` | `Tools & Software` | `Tools & Software` | `Tools & Software` | `ابزارها و نرم‌افزارها` |
| Tools & Software Subtitle| `tools_desc` | `Essential instruments in my daily development workflow.` | `Unverzichtbare Werkzeuge in meinem täglichen Entwicklungs-Workflow.` | `Essentiële instrumenten in mijn dagelijkse ontwikkelingsworkflow.` | `ابزارهای کلیدی که روزانه در جریان توسعه نرم‌افزار از آن‌ها استفاده می‌کنم.` |

### Hardcoded Tools & Software Matrix in `src/app/skills/page.jsx`
- **Category: `Backend & APIs`**
  - Items: `Python`, `Django`, `Django REST Framework`, `Swagger (OpenAPI)`, `Postman`
- **Category: `Database & AsyncQueue`**
  - Items: `PostgreSQL`, `Redis`, `Celery`
- **Category: `DevOps & Server`**
  - Items: `Ubuntu Linux`, `Docker & Docker Compose`, `Nginx`, `Git & GitHub`, `Cloudflare CDN`
- **Category: `AI Agents & AI-Built Frontend`**
  - Items: `Antigravity Agent`, `Cursor AI`, `Next.js (via AI)`, `React.js (via AI)`

---

## 16. Work With Me — Page Header & Contact Information
- **Source File(s):** `frontend/src/app/work-with-me/page.jsx` | `frontend/src/locales/WorkWithMe.locales.js`
- **UI Location:** Hire Page (`/work-with-me`) > Top Header & Left Contact Panel

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Page Heading (Part 1) | `workwithme_title_part1` | `Let's Work` | `Lass uns zusammen` | `Laten we samen` | `بیایید با هم` |
| Page Heading (Part 2) | `workwithme_title_part2` | `Together` | `arbeiten` | `Werken` | `کار کنیم` |
| Page Subtitle | `workwithme_desc` | `Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.` | `Haben Sie ein Projekt im Sinn? Füllen Sie das Formular unten aus und ich werde mich innerhalb von 24 Stunden bei Ihnen melden.` | `Heb je een project in gedachten? Vul het onderstaande formulier in en ik neem binnen 24 uur contact met je op.` | `پروژه‌ای در ذهن دارید؟ فرم زیر را پر کنید تا در کمتر از ۲۴ ساعت با شما تماس بگیرم.` |
| Contact Panel Title | `contact_info` | `Contact Information` | `Kontaktinformationen` | `Contactinformatie` | `اطلاعات تماس` |
| Contact Panel Description| `contact_desc` | `You can also reach me directly via email or social media.` | `Sie können mich auch direkt per E-Mail oder über soziale Medien erreichen.` | `Je kunt me ook rechtstreeks bereiken via e-mail of sociale media.` | `همچنین می‌توانید از طریق ایمیل یا شبکه‌های اجتماعی مستقیماً با من در ارتباط باشید.` |
| Email Label | `email_label` | `Direct Email` | `Direkte E-Mail` | `Directe E-mail` | `ایمیل مستقیم` |
| Email Value | *[Hardcoded Literal]* | `mahdymollayousefy@gmail.com` | `mahdymollayousefy@gmail.com` | `mahdymollayousefy@gmail.com` | `mahdymollayousefy@gmail.com` |
| Location Label | `location_label` | `Location` | `Standort` | `Locatie` | `موقعیت` |
| Location Value | `location` | `Iran` | `Iran` | `Iran` | `ایران` |
| LinkedIn Label | *[Hardcoded Literal]* | `LinkedIn` | `LinkedIn` | `LinkedIn` | `LinkedIn` |
| LinkedIn Handle | *[Hardcoded Literal]* | `in/mahdy-mollayousefy` | `in/mahdy-mollayousefy` | `in/mahdy-mollayousefy` | `in/mahdy-mollayousefy` |
| GitHub Label | *[Hardcoded Literal]* | `GitHub` | `GitHub` | `GitHub` | `GitHub` |
| GitHub Handle | *[Hardcoded Literal]* | `mahdymollayousefy` | `mahdymollayousefy` | `mahdymollayousefy` | `mahdymollayousefy` |

---

## 17. Work With Me — Hire Me Form & Submission
- **Source File(s):** `frontend/src/app/work-with-me/page.jsx` | `frontend/src/locales/WorkWithMe.locales.js`
- **UI Location:** Hire Page (`/work-with-me`) > Right Form Column

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Field: Name Label | `name` | `Name` | `Name` | `Naam` | `نام` |
| Field: Name Placeholder| `placeholder_name` | `John Doe` | `Max Mustermann` | `Jan Jansen` | `علی علوی` |
| Field: Email Label | `email` | `Email` | `E-Mail` | `E-mail` | `ایمیل` |
| Field: Email Placeholder| `placeholder_email` | `john@example.com` | `max@beispiel.de` | `jan@voorbeeld.nl` | `ali@example.com` |
| Field: Phone Label | `phone` | `Phone` | `Telefon` | `Telefoon` | `تلفن` |
| Field: Budget Label | `budget` | `Budget ($) (Optional)` | `Budget ($) (Optional)` | `Budget ($) (Optioneel)` | `بودجه ($) (اختیاری)` |
| Field: Budget Placeholder| `placeholder_budget` | `5000` | `5000` | `5000` | `5000` |
| Field: Description Label| `project_desc` | `Project Description` | `Projektbeschreibung` | `Projectbeschrijving` | `توضیحات پروژه` |
| Field: Description Placeholder| `placeholder_desc` | `Tell me about your project...` | `Erzählen Sie mir von Ihrem Projekt...` | `Vertel me over uw project...` | `درباره پروژه خود توضیح دهید...` |
| Button: Send CTA | `send` | `Send Message` | `Nachricht senden` | `Bericht Verzenden` | `ارسال پیام` |
| Button: Submitting *(Bypassed)*| `sending` | `Sending...` | `Senden...` | `Verzenden...` | `در حال ارسال...` |
| Success Alert Heading | `success` | `Your message has been sent successfully! I will get back to you soon.` | `Ihre Nachricht wurde erfolgreich gesendet! Ich werde mich bald bei Ihnen melden.` | `Je bericht is succesvol verzonden! Ik neem snel contact met je op.` | `پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهم گرفت.` |
| Reset Form Button | `send_another` | `Send Another Request` | `Weitere Anfrage senden` | `Nog een verzoek sturen` | `ارسال درخواستی دیگر` |
| Generic Error Fallback | *[Hardcoded Literal]* | `Something went wrong. Please try again.` | `[MISSING TRANSLATION]` *(Hardcoded)* | `[MISSING TRANSLATION]` *(Hardcoded)* | `[MISSING TRANSLATION]` *(Hardcoded)* |

---

## 18. Work With Me — Service Packages (Pricing)
- **Source File(s):** `frontend/src/app/work-with-me/page.jsx` | `frontend/src/locales/WorkWithMe.locales.js`
- **UI Location:** Hire Page (`/work-with-me`) > Middle Section

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Section Title | `pricing_title` | `Service Packages` | `Zusammenarbeitsmodelle`| `Dienstenpakketten` | `بسته‌های خدماتی` |
| Section Subtitle | `pricing_desc` | `Flexible engagement models tailored to your project needs.` | `Flexible Zusammenarbeitsmodelle, zugeschnitten auf Ihre Projektbedürfnisse.` | `Flexibele werkmodellen afgestemd op uw projectbehoeften.` | `مدل‌های کاری منعطف و متناسب با نیازهای پروژه شما.` |
| Package 1: Title | `pricing_1` | `Backend & DevOps Consulting` | `Backend- & DevOps-Beratung` | `Backend & DevOps Consultancy` | `مشاوره بک‌اند و دواپس` |
| Package 1: Description | `pricing_1_desc` | `Ideal for Django API architecture reviews, PostgreSQL/Redis optimization, fixing complex backend bugs, and configuring Docker & Nginx deployments on Ubuntu servers.` | `Ideal für Reviews der Django-API-Architektur, PostgreSQL/Redis-Optimierung, Behebung komplexer Backend-Bugs und Konfiguration von Docker- & Nginx-Deployments auf Ubuntu-Servern.` | `Ideaal voor beoordelingen van Django API-architectuur, PostgreSQL/Redis-optimalisatie, het oplossen van complexe backend-bugs en het configureren van Docker- & Nginx-implementaties op Ubuntu-servers.` | `ایده‌آل برای بررسی معماری API جنگو، بهینه‌سازی دیتابیس PostgreSQL و Redis، رفع باگ‌های پیچیده بک‌اند و کانفیگ استقرارهای داکر و Nginx روی سرورهای اوبونتو.` |
| Package 2: Title | `pricing_2` | `Project-Based Development` | `Projektbasierte Entwicklung` | `Op Projectbasis Ontwikkeling` | `توسعه پروژه‌ای (Project-Based)` |
| Package 2: Description | `pricing_2_desc` | `Fixed-price delivery for custom Django/DRF backends or complete web applications where I build the backend architecture and use AI agents to deliver a secure Next.js frontend.` | `Festpreis-Lieferung für maßgeschneiderte Django/DRF-Backends oder komplette Webanwendungen, bei denen ich die Backend-Architektur erstelle und KI-Agenten nutze, um ein sicheres Next.js-Frontend bereitzustellen.` | `Oplevering tegen een vaste prijs voor op maat gemaakte Django/DRF-backends of complete webapplicaties waarbij ik de backend-architectuur bouw en AI-agenten inzet om een veilige Next.js-frontend te leveren.` | `تحویل با قیمت مقطوع برای بک‌اندهای اختصاصی جنگو/DRF یا وب‌اپلیکیشن‌های کامل که در آن‌ها معماری بک‌اند را طراحی می‌کنم و با استفاده از ایجنت‌های هوش مصنوعی، یک فرانت‌اند امن Next.js ارائه می‌دهم.` |
| Package 3: Title | `pricing_3` | `Monthly Backend Retainer` | `Monatlicher Backend-Retainer` | `Maandelijkse Backend Retainer` | `پشتیبانی ماهانه بک‌اند (Retainer)` |
| Package 3: Description | `pricing_3_desc` | `Dedicated monthly hours for ongoing backend feature development, API maintenance, server monitoring, and long-term technical support.` | `Dedizierte monatliche Stunden für kontinuierliche Backend-Feature-Entwicklung, API-Wartung, Server-Monitoring und langfristigen technischen Support.` | `Toegewijde maandelijkse uren voor doorlopende backend-functionaliteitsontwikkeling, API-onderhoud, servermonitoring en langdurige technische ondersteuning.` | `اختصاص ساعات ماهانه مشخص برای توسعه قابلیت‌های جدید بک‌اند، نگهداری APIها، مانیتورینگ سرور و پشتیبانی فنی بلندمدت.` |

---

## 19. Work With Me — Frequently Asked Questions (FAQ)
- **Source File(s):** `frontend/src/app/work-with-me/page.jsx` | `frontend/src/locales/WorkWithMe.locales.js`
- **UI Location:** Hire Page (`/work-with-me`) > Bottom FAQ Accordion

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| FAQ Section Title | `faq_title` | `Frequently Asked Questions` | `Häufig gestellte Fragen` | `Veelgestelde Vragen` | `سوالات متداول` |

### FAQ 1: Core Technology Stack
- **Question Key:** `faq_1_q`
  - **English (`en`):** What is your core technology stack?
  - **German (`de`):** Was ist Ihr primärer Technologie-Stack?
  - **Dutch (`nl`):** Wat is uw primaire technologiestack?
  - **Persian (`fa`):** تکنولوژی‌های اصلی (Stack) شما چیست؟
- **Answer Key:** `faq_1_a`
  - **English (`en`):**
    > My core expertise is backend engineering using Python, Django, and Django REST Framework, backed by PostgreSQL, Redis, and Celery. For deployment, I use Docker, Nginx, and Ubuntu Linux. For frontend needs, I use advanced AI agents (Cursor and Antigravity) to build secure Next.js and React.js interfaces.
  - **German (`de`):**
    > Meine Kernexpertise liegt im Backend-Engineering mit Python, Django und dem Django REST Framework, unterstützt durch PostgreSQL, Redis und Celery. Für das Deployment nutze ich Docker, Nginx und Ubuntu Linux. Für Frontend-Anforderungen verwende ich fortschrittliche KI-Agenten (Cursor und Antigravity), um sichere Next.js- und React.js-Schnittstellen zu erstellen.
  - **Dutch (`nl`):**
    > Mijn kernexpertise is backend engineering met behulp van Python, Django en Django REST Framework, ondersteund door PostgreSQL, Redis en Celery. Voor implementaties gebruik ik Docker, Nginx en Ubuntu Linux. Voor frontendbehoeften gebruik ik geavanceerde AI-agenten (Cursor en Antigravity) om veilige Next.js- en React.js-interfaces te bouwen.
  - **Persian (`fa`):**
    > تخصص اصلی من مهندسی بک‌اند با استفاده از پایتون، جنگو و جنگو رست فریم‌ورک است که با PostgreSQL، Redis و Celery پشتیبانی می‌شود. برای استقرار و سرور، از داکر، Nginx و اوبونتو لینوکس استفاده می‌کنم. برای نیازهای فرانت‌اند نیز با کمک ایجنت‌های پیشرفته هوش مصنوعی (Cursor و Antigravity)، رابط‌های کاربری امن Next.js و React.js می‌سازم.

### FAQ 2: AI & Automation Integration
- **Question Key:** `faq_2_q`
  - **English (`en`):** How do you use AI agents like Cursor and Antigravity in your projects?
  - **German (`de`):** Wie setzen Sie KI-Agenten wie Cursor und Antigravity in Ihren Projekten ein?
  - **Dutch (`nl`):** Hoe zet u AI-agenten zoals Cursor en Antigravity in bij uw projecten?
  - **Persian (`fa`):** چگونه از ایجنت‌های هوش مصنوعی مانند Cursor و Antigravity در پروژه‌هایتان استفاده می‌کنید؟
- **Answer Key:** `faq_2_a`
  - **English (`en`):**
    > I use Cursor and Antigravity as force multipliers in my daily workflow. They allow me to accelerate code generation, write comprehensive tests, and build complete, security-hardened Next.js/React frontends without needing a separate frontend developer.
  - **German (`de`):**
    > Ich nutze Cursor und Antigravity als Kraftverstärker in meinem täglichen Workflow. Sie ermöglichen es mir, die Codegenerierung zu beschleunigen, umfassende Tests zu schreiben und vollständige, sicherheitsgehärtete Next.js/React-Frontends zu erstellen, ohne einen separaten Frontend-Entwickler zu benötigen.
  - **Dutch (`nl`):**
    > Ik gebruik Cursor en Antigravity als versterkers in mijn dagelijkse workflow. Ze stellen me in staat codecreatie te versnellen, uitgebreide tests te schrijven en complete, beveiligde Next.js/React-frontends te bouwen zonder een aparte frontend-ontwikkelaar nodig te hebben.
  - **Persian (`fa`):**
    > من از Cursor و Antigravity به عنوان اهرم‌های پرقدرت در جریان کاری روزمره استفاده می‌کنم. این ابزارها به من امکان می‌دهند سرعت تولید کد را به شدت بالا ببرم، تست‌های جامع بنویسم و فرانت‌اندهای کامل و امن با Next.js/React بسازم بدون اینکه به برنامه‌نویس فرانت‌اند مجزا نیاز باشد.

### FAQ 3: Production Projects
- **Question Key:** `faq_3_q`
  - **English (`en`):** Do you have real, live projects in production?
  - **German (`de`):** Haben Sie echte Live-Projekte in der Produktion?
  - **Dutch (`nl`):** Heeft u echte, live projecten in productie?
  - **Persian (`fa`):** آیا پروژه‌های واقعی و زنده در محیط عملیاتی (Production) دارید؟
- **Answer Key:** `faq_3_a`
  - **English (`en`):**
    > Yes. Over my 3+ years of experience with Python and Django, I have built and deployed 4 live production web applications that are actively running on Ubuntu servers with Docker and Nginx.
  - **German (`de`):**
    > Ja. In meinen mehr als 3 Jahren Erfahrung mit Python und Django habe ich 4 Live-Produktions-Webanwendungen entwickelt und bereitgestellt, die aktiv auf Ubuntu-Servern mit Docker und Nginx laufen.
  - **Dutch (`nl`):**
    > Ja. In mijn meer dan 3 jaar ervaring met Python en Django heb ik 4 live productie-webapplicaties gebouwd en geïmplementeerd die actief draaien op Ubuntu-servers met Docker en Nginx.
  - **Persian (`fa`):**
    > بله. در طول ۳+ سال تجربه کار با پایتون و جنگو، من ۴ وب‌اپلیکیشن عملیاتی و زنده ساخته و مستقر کرده‌ام که هم‌اکنون به صورت پایدار روی سرورهای ابونتو با داکر و Nginx در حال اجرا هستند.

### FAQ 4: Deployment & Hosting Management
- **Question Key:** `faq_4_q`
  - **English (`en`):** How do you handle project deployment and server management?
  - **German (`de`):** Wie handhaben Sie Projekt-Deployment und Server-Management?
  - **Dutch (`nl`):** Hoe gaat u om met projectimplementatie en serverbeheer?
  - **Persian (`fa`):** استقرار پروژه و مدیریت سرور را چگونه انجام می‌دهید؟
- **Answer Key:** `faq_4_a`
  - **English (`en`):**
    > I handle the entire deployment pipeline on Ubuntu Linux servers. I containerize the application using Docker and Docker Compose, configure Nginx as a reverse proxy with SSL, and ensure smooth, reliable production releases.
  - **German (`de`):**
    > Ich übernehme die gesamte Deployment-Pipeline auf Ubuntu-Linux-Servern. Ich containerisiere die Anwendung mit Docker und Docker Compose, konfiguriere Nginx als Reverse Proxy mit SSL und sorge für reibungslose, zuverlässige Produktions-Releases.
  - **Dutch (`nl`):**
    > Ik beheer de gehele implementatiepijplijn op Ubuntu Linux-servers. Ik containeriseer de applicatie met behulp van Docker en Docker Compose, configureer Nginx als een reverse proxy met SSL en zorg voor soepele, betrouwbare productiereleases.
  - **Persian (`fa`):**
    > من کل پایپ‌لاین استقرار را روی سرورهای لینوکس ابونتو مدیریت می‌کنم. اپلیکیشن را با داکر و Docker Compose کانتینری کرده، Nginx را به عنوان ریورس پروکسی همراه با SSL تنظیم می‌کنم و انتشاری امن، روان و بدون اختلال را رقم می‌زنم.

### FAQ 5: Documentation & API Testing
- **Question Key:** `faq_5_q`
  - **English (`en`):** How do you document and test your APIs?
  - **German (`de`):** Wie dokumentieren und testen Sie Ihre APIs?
  - **Dutch (`nl`):** Hoe documenteert en test u uw API's?
  - **Persian (`fa`):** چگونه APIهای خود را مستندسازی و تست می‌کنید؟
- **Answer Key:** `faq_5_a`
  - **English (`en`):**
    > I use Swagger (OpenAPI) to generate clear, interactive API documentation so any developer or client can easily understand the endpoints, and I use Postman for thorough endpoint testing and validation.
  - **German (`de`):**
    > Ich nutze Swagger (OpenAPI), um klare, interaktive API-Dokumentationen zu erstellen, sodass jeder Entwickler oder Kunde die Endpunkte leicht verstehen kann, und ich verwende Postman für gründliche Endpunkttests und -validierungen.
  - **Dutch (`nl`):**
    > Ik gebruik Swagger (OpenAPI) om duidelijke, interactieve API-documentatie te genereren zodat elke ontwikkelaar of klant de eindpunten gemakkelijk kan begrijpen, en ik gebruik Postman voor grondige endpointtests en validatie.
  - **Persian (`fa`):**
    > من از Swagger (OpenAPI) برای تولید مستندات تعاملی و شفاف API استفاده می‌کنم تا هر توسعه‌دهنده یا کارفرمایی به راحتی با اندپوینت‌ها کار کند، و از Postman برای تست، بررسی و اعتبارسنجی دقیق اندپوینت‌ها بهره می‌برم.

### FAQ 6: Hourly Rate & Pricing
- **Question Key:** `faq_6_q`
  - **English (`en`):** What is your typical rate or pricing model?
  - **German (`de`):** Was ist Ihr typischer Stundensatz oder Preismodell?
  - **Dutch (`nl`):** Wat is uw gebruikelijke tarief of prijsmodel?
  - **Persian (`fa`):** مدل قیمت‌گذاری یا نرخ معمول شما چگونه است؟
- **Answer Key:** `faq_6_a`
  - **English (`en`):**
    > My pricing depends on the project's scope and technical complexity (e.g., pure backend API development vs. full end-to-end delivery and server setup). Send your project details via the contact form for an accurate estimate.
  - **German (`de`):**
    > Meine Preisgestaltung hängt vom Umfang und der technischen Komplexität des Projekts ab (z. B. reine Backend-API-Entwicklung vs. vollständige End-to-End-Bereitstellung und Server-Setup). Senden Sie mir Ihre Projektdetails über das Kontaktformular für einen genauen Kostenvoranschlag.
  - **Dutch (`nl`):**
    > Mijn prijs is afhankelijk van de omvang en de technische complexiteit van het project (bijv. pure backend API-ontwikkeling vs. volledige end-to-end oplevering en serverconfiguratie). Stuur uw projectdetails via het contactformulier voor een nauwkeurige inschatting.
  - **Persian (`fa`):**
    > قیمت‌گذاری من به محدوده و پیچیدگی فنی پروژه بستگی دارد (به عنوان مثال توسعه صرفاً بک‌اند API در مقایسه با تحویل کامل End-to-End و راه‌اندازی سرور). جزئیات پروژه خود را از طریق فرم تماس ارسال کنید تا برآورد دقیقی ارائه دهم.

### FAQ 7: Full-Stack & Backend Scope
- **Question Key:** `faq_7_q`
  - **English (`en`):** Do you handle both backend and frontend development?
  - **German (`de`):** Übernehmen Sie sowohl Backend- als auch Frontend-Entwicklung?
  - **Dutch (`nl`):** Behandelt u zowel backend- als frontend-ontwikkeling?
  - **Persian (`fa`):** آیا توسعه هر دو بخش بک‌اند و فرانت‌اند را انجام می‌دهید؟
- **Answer Key:** `faq_7_a`
  - **English (`en`):**
    > I am a Backend Specialist first and foremost. However, when a project requires a full-stack website, I build the entire frontend in Next.js and React.js using AI agents (Cursor and Antigravity) while strictly enforcing security best practices and backend validation.
  - **German (`de`):**
    > Ich bin in erster Linie Backend-Spezialist. Wenn ein Projekt jedoch eine Full-Stack-Website erfordert, erstelle ich das gesamte Frontend in Next.js und React.js unter Einsatz von KI-Agenten (Cursor und Antigravity) und setze dabei strenge Sicherheitsbestimmungen und Backend-Validierungen durch.
  - **Dutch (`nl`):**
    > Ik ben in de eerste plaats een Backend Specialist. Wanneer een project echter een full-stack website vereist, bouw ik de volledige frontend in Next.js en React.js met behulp van AI-agenten (Cursor en Antigravity), waarbij ik strikte best practices op het gebied van beveiliging en backendvalidatie handhaaf.
  - **Persian (`fa`):**
    > من پیش از هر چیز متخصص بک‌اند هستم. با این حال، هنگامی که پروژه‌ای نیازمند وب‌سایت فول‌استک باشد، کل فرانت‌اند را در Next.js و React.js با هدایت ایجنت‌های هوش مصنوعی (Cursor و Antigravity) توسعه می‌دهم و همزمان استانداردهای امنیتی و اعتبارسنجی بک‌اند را به طور سخت‌گیرانه اعمال می‌کنم.

### FAQ 8: Communication & Agile Reporting
- **Question Key:** `faq_8_q`
  - **English (`en`):** What is your communication process during a project?
  - **German (`de`):** Wie läuft Ihr Kommunikationsprozess während eines Projekts ab?
  - **Dutch (`nl`):** Wat is uw communicatieproces tijdens een project?
  - **Persian (`fa`):** روند ارتباط و گزارش‌دهی شما در طول پروژه چگونه است؟
- **Answer Key:** `faq_8_a`
  - **English (`en`):**
    > I prioritize clear, transparent communication with regular progress updates via GitHub, Telegram, or email, ensuring technical milestones stay aligned with your business goals.
  - **German (`de`):**
    > Ich lege großen Wert auf klare, transparente Kommunikation mit regelmäßigen Fortschritts-Updates über GitHub, Telegram oder E-Mail, um sicherzustellen, dass die technischen Meilensteine stets mit Ihren Geschäftszielen übereinstimmen.
  - **Dutch (`nl`):**
    > Ik geef prioriteit aan duidelijke, transparante communicatie met regelmatige voortgangsupdates via GitHub, Telegram of e-mail, zodat technische mijlpalen altijd afgestemd blijven op uw bedrijfsdoelen.
  - **Persian (`fa`):**
    > من اولویت را بر ارتباط شفاف و روشن قرار می‌دهم و گزارش‌های پیشرفت منظم را از طریق گیت‌هاب، تلگرام یا ایمیل ارسال می‌کنم تا مطمئن شویم مایلستون‌های فنی کاملاً در راستای اهداف کسب‌وکار شما پیش می‌روند.

### FAQ 9: Employment Types & Freelancing
- **Question Key:** `faq_9_q`
  - **English (`en`):** Are you available for full-time backend roles or freelance projects?
  - **German (`de`):** Stehen Sie für Vollzeit-Backend-Rollen oder freiberufliche Projekte zur Verfügung?
  - **Dutch (`nl`):** Bent u beschikbaar voor fulltime backendfuncties of freelance projecten?
  - **Persian (`fa`):** آیا برای موقعیت‌های شغلی تمام‌وقت بک‌اند در دسترس هستید یا پروژه‌های فریلنسری؟
- **Answer Key:** `faq_9_a`
  - **English (`en`):**
    > I am open to both full-time Backend Engineer roles (Python/Django) and project-based freelance contracts.
  - **German (`de`):**
    > Ich bin sowohl für Vollzeitstellen als Backend Engineer (Python/Django) als auch für projektbezogene Freelance-Verträge offen.
  - **Dutch (`nl`):**
    > Ik sta open voor zowel fulltime functies als Backend Engineer (Python/Django) als voor projectmatige freelance contracten.
  - **Persian (`fa`):**
    > من هم برای موقعیت‌های شغلی تمام‌وقت به عنوان مهندس بک‌اند (Python/Django) و هم برای قراردادهای پروژه‌ای و فریلنسری آماده همکاری هستم.

### FAQ 10: Project Kickoff & Next Steps
- **Question Key:** `faq_10_q`
  - **English (`en`):** How do we get started on a project?
  - **German (`de`):** Wie starten wir ein Projekt zusammen?
  - **Dutch (`nl`):** Hoe beginnen we aan een project?
  - **Persian (`fa`):** چگونه همکاری روی یک پروژه را شروع کنیم؟
- **Answer Key:** `faq_10_a`
  - **English (`en`):**
    > Send me a message through the contact form with an overview of your project requirements and timeline, and I will get back to you within 24 hours to discuss the technical architecture.
  - **German (`de`):**
    > Senden Sie mir eine Nachricht über das Kontaktformular mit einer Übersicht über Ihre Projektanforderungen und Ihren Zeitplan, und ich werde mich innerhalb von 24 Stunden bei Ihnen melden, um die technische Architektur zu besprechen.
  - **Dutch (`nl`):**
    > Stuur me een bericht via het contactformulier met een overzicht van uw projectvereisten en tijdlijn, en ik neem binnen 24 uur contact met u op om de technische architectuur te bespreken.
  - **Persian (`fa`):**
    > کافیست از طریق فرم تماس پیامی شامل خلاصه‌ای از نیازمندی‌ها و زمان‌بندی پروژه خود ارسال کنید؛ من ظرف ۲۴ ساعت برای گفتگو پیرامون معماری فنی سیستم با شما تماس خواهم گرفت.

---

## 20. Legal Page
- **Source File(s):** `frontend/src/app/legal/page.jsx` | `frontend/src/locales/Legal.locales.js`
- **UI Location:** Legal Page (`/legal`)

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Page Heading | `legal_title` | `Legal Information` | `Rechtliche Informationen`| `Juridische Informatie` | `اطلاعات حقوقی (Legal Information)` |
| Section 1: Privacy Title| `privacy_title` | `Privacy Policy` | `Datenschutzerklärung (Privacy Policy)` | `Privacybeleid (Privacy Policy)` | `سیاست حفظ حریم خصوصی (Privacy Policy)` |
| Section 2: Cookies Title| `cookie_title` | `Cookie Preferences` | `Cookie-Einstellungen (Cookie Preferences)` | `Cookievoorkeuren (Cookie Preferences)` | `تنظیمات کوکی‌ها (Cookie Preferences)` |
| Section 3: Rules Title | `rules_title` | `Rules & Agreements (Terms of Service)` | `Nutzungsbedingungen (Rules & Agreements)` | `Regels & Overeenkomsten (Rules & Agreements)` | `قوانین و توافق‌نامه‌ها (Rules & Agreements)` |
| Section 4: Payment Title| `payment_title` | `Payment Methods` | `Zahlungsmethoden (Payment Methods)` | `Betaalmethoden (Payment Methods)` | `روش‌های پرداخت (Payment Methods)` |

### Legal Section 1: Privacy Policy Body
- **Source Key:** `privacy_content`
- **[English (`en`)]:**
  > Your privacy is paramount. I collect only the minimal data strictly necessary (such as your name and email address when you use the contact form) to respond to your inquiries and deliver my services. Your personal information is kept secure and is never sold, traded, or shared with third parties.
- **[German (`de`)]:**
  > Ihre Privatsphäre steht an erster Stelle. Ich erhebe nur die minimal notwendigen Daten (wie Ihren Namen und Ihre E-Mail-Adresse bei der Nutzung des Kontaktformulars), um auf Ihre Anfragen zu antworten und meine Dienstleistungen zu erbringen. Ihre persönlichen Daten werden sicher aufbewahrt und niemals an Dritte verkauft, gehandelt oder weitergegeben.
- **[Dutch (`nl`)]:**
  > Uw privacy staat voorop. Ik verzamel alleen de strikt noodzakelijke gegevens (zoals uw naam en e-mailadres wanneer u het contactformulier gebruikt) om op uw vragen te reageren en mijn diensten te leveren. Uw persoonlijke gegevens worden veilig bewaard en nooit verkocht, verhandeld of gedeeld met derden.
- **[Persian (`fa`)]:**
  > حریم خصوصی شما برای من در اولویت است. من تنها حداقل داده‌های ضروری (مانند نام و ایمیل شما هنگام استفاده از فرم تماس) را صرفاً برای پاسخگویی به درخواست‌ها و ارائه خدمات جمع‌آوری می‌کنم. اطلاعات شخصی شما کاملاً امن نگهداری شده و هرگز به اشخاص ثالث فروخته، مبادله یا منتقل نمی‌شود.

### Legal Section 2: Cookie Preferences Body
- **Source Key:** `cookie_content`
- **[English (`en`)]:**
  > This website respects your digital footprint. I use only strictly necessary cookies required to ensure the basic functionality and security of the site. Absolutely no third-party tracking, advertising, or analytical cookies are employed.
- **[German (`de`)]:**
  > Diese Website respektiert Ihren digitalen Fußabdruck. Ich verwende ausschließlich unbedingt notwendige Cookies, die für die grundlegende Funktionalität und Sicherheit der Website erforderlich sind. Es werden absolut keine Tracking-, Werbe- oder Analyse-Cookies von Drittanbietern eingesetzt.
- **[Dutch (`nl`)]:**
  > Deze website respecteert uw digitale voetafdruk. Ik gebruik alleen strikt noodzakelijke cookies die vereist zijn om de basisfuncties en de veiligheid van de site te garanderen. Er worden absoluut geen tracking-, advertentie- of analytische cookies van derden gebruikt.
- **[Persian (`fa`)]:**
  > این وب‌سایت به حریم دیجیتال شما احترام می‌گذارد. من فقط از کوکی‌های کاملاً ضروری که برای عملکرد پایه و امنیت سایت نیاز هستند استفاده می‌کنم. در این وب‌سایت از هیچ‌گونه کوکی ردیابی (Tracking)، تبلیغاتی یا تحلیلی شخص ثالث استفاده نمی‌شود.

### Legal Section 3: Rules & Agreements Body
- **Source Key:** `rules_content`
- **[English (`en`)]:**
  > By accessing and using this portfolio, you agree to these basic terms. You agree not to misuse the provided contact forms for spam, phishing, or any malicious purposes. Furthermore, any attempt to bypass security measures or gain unauthorized access to the backend systems, APIs, or infrastructure of this website is strictly prohibited.
- **[German (`de`)]:**
  > Durch den Zugriff auf diese Website und deren Nutzung stimmen Sie diesen grundlegenden Bedingungen zu. Sie verpflichten sich, die bereitgestellten Kontaktformulare nicht für Spam, Phishing oder andere böswillige Zwecke zu missbrauchen. Jeder Versuch, Sicherheitsmaßnahmen zu umgehen oder unbefugten Zugriff auf die Backend-Systeme, APIs oder die Infrastruktur dieser Website zu erlangen, ist strengstens untersagt.
- **[Dutch (`nl`)]:**
  > Door deze website te bezoeken en te gebruiken, gaat u akkoord met deze basisvoorwaarden. U stemt ermee in de contactformulieren niet te misbruiken voor spam, phishing of andere kwaadaardige doeleinden. Bovendien is elke poging om beveiligingsmaatregelen te omzeilen of ongeautoriseerde toegang te krijgen tot de backend-systemen, API's of infrastructuur van deze website ten strengste verboden.
- **[Persian (`fa`)]:**
  > با دسترسی و استفاده از این وب‌سایت، شما با این شرایط پایه موافقت می‌کنید. شما متعهد می‌شوید که از فرم‌های تماس برای ارسال اسپم، فیشینگ یا هرگونه مقاصد مخرب استفاده نکنید. علاوه بر این، هرگونه تلاش برای دور زدن لایه‌های امنیتی یا دسترسی غیرمجاز به سیستم‌های بک‌اند، APIها و زیرساخت این سایت اکیداً ممنوع است.

### Legal Section 4: Payment Methods Body
- **Source Key:** `payment_content`
- **[English (`en`)]:**
  > Please be advised that for all freelance, consulting, and project-based services, <strong>I exclusively accept payments in Cryptocurrencies</strong> (e.g., USDT, Bitcoin, Ethereum). Traditional fiat payment methods (such as bank transfers, PayPal, or credit cards) are not currently supported.
- **[German (`de`)]:**
  > Bitte beachten Sie, dass ich für alle freiberuflichen, beratenden und projektbasierten Dienstleistungen <strong>Zahlungen ausschließlich in Kryptowährungen</strong> (z. B. USDT, Bitcoin, Ethereum) akzeptiere. Traditionelle Fiat-Zahlungsmethoden (wie Banküberweisungen oder Kreditkarten) werden derzeit nicht unterstützt.
- **[Dutch (`nl`)]:**
  > Houd er rekening mee dat ik voor alle freelance-, advies- en projectmatige diensten <strong>uitsluitend betalingen in Cryptocurrencies</strong> (bijv. USDT, Bitcoin, Ethereum) accepteer. Traditionele fiat-betaalmethoden (zoals bankoverschrijvingen of creditcards) worden momenteel niet ondersteund.
- **[Persian (`fa`)]:**
  > لطفاً توجه داشته باشید که برای تمامی خدمات پروژه‌ای، فریلنسری و مشاوره، <strong>پرداخت‌ها انحصاراً از طریق ارزهای دیجیتال (Cryptocurrencies)</strong> مانند تتر (USDT)، بیت‌کوین و اتریوم انجام می‌شود. در حال حاضر از روش‌های پرداخت سنتی (ارزهای فیات، حواله بانکی یا پی‌پال) پشتیبانی نمی‌شود.

---

## 21. 404 Error Page
- **Source File(s):** `frontend/src/app/not-found.jsx` | `frontend/src/locales/NotFound.locales.js`
- **UI Location:** Global Catch-All 404 Route

| Element / Context | Translation Key | English (`en`) | German (`de`) | Dutch (`nl`) | Persian (`fa`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Big Numerical Heading | `404_title` | `404` | `404` | `404` | `۴۰۴` |
| Subtitle | `404_subtitle` | `Page Not Found` | `Seite nicht gefunden` | `Pagina niet gevonden` | `صفحه پیدا نشد` |
| Primary Description | `404_desc` | `Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.` | `Hoppla! Die von Ihnen gesuchte Seite existiert nicht, wurde verschoben oder ist vorübergehend nicht verfügbar.` | `Oeps! De pagina die je zoekt bestaat niet, is verplaatst of is tijdelijk niet beschikbaar.` | `اوپس! صفحه‌ای که به دنبال آن هستید وجود ندارد، جابجا شده یا موقتاً در دسترس نیست.` |
| Return CTA Button | `404_btn` | `Return to Homepage` | `Zurück zur Startseite` | `Terug naar de homepagina` | `بازگشت به صفحه اصلی` |

---

## 22. Backend System Messages & Validation
- **Source File(s):** `backend/api/serializers.py` | `backend/api/views.py` | `backend/api/models.py` | `frontend/src/services/api.js`
- **UI Location:** Server-Side REST API Responses & Form Validation Errors

| Context / Trigger | Source Location | English Default Copy | Status / Translation Support |
| :--- | :--- | :--- | :--- |
| Negative Budget Error | `backend/api/serializers.py:59` | `Budget cannot be negative.` | Server-side validation string; lacks i18n localization. |
| Invalid Email Error | `backend/api/serializers.py:65` | `Please provide a valid email address.` | Server-side validation string; lacks i18n localization. |
| Generic Submission Error | `frontend/src/services/api.js:100` | `Something went wrong. Please try again.` | Frontend API catch fallback; hardcoded in English. |
| Healthcheck Message | `backend/api/views.py:69` | `Django API is active.` | API status response payload. |
| Admin Status: Pending | `backend/api/models.py:106` | `Pending` | Admin choices field. |
| Admin Status: Reviewed | `backend/api/models.py:107` | `Reviewed` | Admin choices field. |
| Admin Status: Contacted| `backend/api/models.py:108` | `Contacted` | Admin choices field. |
| Field: Client Name | `backend/api/models.py:110` | `Client/Company Name` | Verbose name in Django ORM. |
| Field: Project Description| `backend/api/models.py:113` | `Project Description` | Verbose name in Django ORM. |
| Help: Phone Input | `backend/api/models.py:112` | `Include international code, e.g., +1234567890` | Admin form help text. |
| Help: Budget Input | `backend/api/models.py:114` | `Estimated budget in USD` | Admin form help text. |
| Help: Tech Stacks Input| `backend/api/admin.py:15` | `Enter tech stacks separated by commas, e.g.: React, Django, PostgreSQL` | Admin widget placeholder. |
