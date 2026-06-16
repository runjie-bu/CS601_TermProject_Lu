# Runjie Lu CS601 Term Project Portfolio

This is a React-based personal portfolio website for the MET CS601 term project. The site presents my background, selected projects, technical skills, resume highlights, and a contact form.

## Pages

- Home
- About
- Projects
- Skills
- Resume
- Contact

The Gallery page from an earlier draft was removed because the project information is now stronger without it. The site still has 6 content pages, which fits the 5-10 page term project requirement.

## Project Structure

```text
src/
  App.jsx                 Main application state and page routing
  main.jsx                React entry point
  data.js                 Shared portfolio, project, skill, and resume data
  styles.css              Global site styling
  components/             Reusable UI components
    ContactForm.jsx
    Footer.jsx
    Header.jsx
    PageHeader.jsx
    PersonalLinks.jsx
    ProjectCard.jsx
  pages/                  Individual page views
    About.jsx
    Contact.jsx
    Home.jsx
    Projects.jsx
    Resume.jsx
    Skills.jsx
```

This structure keeps the project easier to read than placing all React code in one file. The `pages` folder contains full page views, while the `components` folder contains reusable pieces used by those pages.

## Features

- React components and reusable data files
- Hash-based navigation between content pages
- Project category filters
- Consistent project card sizing
- Responsive layouts using CSS Grid and Flexbox
- Accessible form labels, alt text, focus styles, and skip link
- JavaScript form validation
- Contact form draft saved with localStorage
- Dynamic document titles for each page

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

