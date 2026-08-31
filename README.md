# Youssef-_Sameh_portfolio
Youssef — Electronics & Computer Science Portfolio

A modern personal portfolio website for an Electronics and Computer Science student.

The design combines a clean, minimal interface with subtle electronics-inspired visual elements such as circuit traces, grids, logic gates, system cards and technical labels.

Built entirely with:

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools are required.

---

Preview

The portfolio is organized into five main sections:

1. Home
2. About
3. Skills
4. Projects
5. Contact

The visual style uses a calm technical color palette:

- Deep Navy
- Slate
- Soft Blue
- Muted Green
- Off White

The goal is to keep the interface professional without using overly bright or distracting colors.

---

Project Structure

portfolio/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

Files

"index.html"

Contains the complete semantic structure of the portfolio.

It includes:

- Responsive navigation
- Hero section
- About section
- Skills cards
- Project cards
- Contact form
- Footer
- Electronics-inspired visual components

---

"style.css"

Contains all visual styling.

It includes:

- Responsive layout
- CSS Grid
- Flexbox
- Custom color variables
- Cards
- Buttons
- Responsive navigation
- Circuit-inspired graphics
- Project visualizations
- Mobile layouts
- Hover effects
- Scroll-reveal transitions

The design does not require Bootstrap, Tailwind or any other CSS framework.

---

"script.js"

Contains the website interactions.

Current features:

- Automatic footer year
- Mobile navigation toggle
- Automatic mobile menu closing
- Contact form validation
- Email validation
- Error states
- Success/error messages
- Scroll reveal animations

---

Before Deployment

Replace the placeholder information with your actual details.

1. About

Update the About section in:

index.html

Replace the example biography with your real academic background and interests.

---

2. Skills

Only list technologies and subjects that you actually know.

For example:

C++
JavaScript
HTML
CSS
Git
Circuit Analysis
Digital Logic
Boolean Algebra

You can also add a confidence level if you want:

C++ — Intermediate
JavaScript — Beginner
HTML/CSS — Intermediate
Digital Logic — Strong

---

3. Projects

Replace the example projects with your real projects.

For every project, update:

- Project name
- Description
- Technologies
- Year
- Live Demo link
- GitHub repository

Example:

<a href="YOUR_PROJECT_URL" class="project-link">
    Live Demo ↗️
</a>

<a href="YOUR_GITHUB_URL" class="project-link">
    GitHub ↗️
</a>

Do not leave the "#" links when deploying the final version.

---

Contact Form

The current contact form performs frontend validation only.

It does not send emails yet.

For a static portfolio, you can connect it to a service such as:

- Formspree
- EmailJS
- Netlify Forms

Alternatively, you can create your own backend API.

Do not put private API keys or secret credentials directly inside "script.js".

---

GitHub Pages Deployment

Create a GitHub repository first.

Then run:

git init

git add .

git commit -m "Initial portfolio"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

git push -u origin main

Then open your repository on GitHub.

Go to:

Settings
→ Pages

Under:

Build and deployment

Choose:

Source: Deploy from a branch
Branch: main
Folder: / (root)

Click:

Save

Your website will then be available at:

https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/

---

Running Locally

No build process is required.

You can simply open:

index.html

in your browser.

For a local development server, use:

python3 -m http.server 8000

Then open:

http://localhost:8000

---

Customization

Change the colors

All main colors are stored at the beginning of "style.css".

For example:

:root {
    --navy-950: #080d18;
    --navy-900: #0b1220;
    --blue: #7aa7c7;
    --green: #7fa89a;
}

This makes it easy to change the entire color scheme without editing every component.

---

Recommended Personalization

Before publishing, change these placeholders:

your.email@example.com

and:

Cairo, Egypt

Also replace:

GitHub
LinkedIn

links with your real profiles.

Most importantly, replace the example projects with projects you actually built.

---

Design Philosophy

The portfolio intentionally avoids:

- Extremely bright colors
- Excessive gradients
- Heavy animations
- Large amounts of decoration
- Generic template styling

Instead, it uses:

- Strong typography
- Large whitespace
- Modular cards
- Grid layouts
- Subtle borders
- Technical labels
- Electronics-inspired visual elements
- Calm colors
- Responsive layouts

The result is intended to feel like a modern engineering portfolio rather than a generic developer template.

---

License

You are free to modify and use this portfolio for your personal website.

Replace the content with your own information, projects and links before deployment.
