export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

export const highlights = [
  { value: '6', label: 'Content pages' },
  { value: 'B.S.', label: 'Computer Science' },
  { value: 'React', label: 'Main framework' }
];

export const aboutCards = [
  {
    title: 'Who I Am',
    text:
      'I am Runjie Lu, a computer science graduate from Santa Clara University with a Software Focus. Right now,I am a graduate student at BU, still majoring in Computer Science. I like building projects that are understandable to real users, not just technically correct on paper.'
  },
  {
    title: 'What I Like to Build',
    text:
      'My favorite work is at the intersection of front-end development, Android apps, student productivity tools, and game-related software. I enjoy taking an idea from planning, to interface design, to a working prototype.'
  },
  {
    title: 'How I Approach Projects',
    text:
      'I try to start with the user problem first, then choose the simplest design and code structure that can solve it. This portfolio follows the same idea: clear pages, readable content, consistent cards, and small interactions that have a purpose.'
  },
  {
    title: 'Current Direction',
    text:
      'I am continuing to strengthen my React, JavaScript, backend, and database skills so I can build more complete full-stack applications. I am currently very interested in the video game industry and hope to apply my professional knowledge to try my hand at game creation.'
  }
];

export const learningTimeline = [
  {
    date: '2021 - 2025',
    title: 'Computer Science foundation',
    text:
      'Completed a B.S. program in Computer Science at Santa Clara University, including software-focused coursework in data structures, software design, networks, web usability, operating systems, programming languages, and data science.'
  },
  {
    date: 'Summer 2023',
    title: 'Web development internship',
    text:
      'Worked on page content, HTML, CSS, JavaScript, API integration, and front-end/back-end feature support during a software developer internship. The experience helped me connect classroom web concepts to real project requirements and collaboration.'
  },
  {
    date: 'Fall 2023',
    title: 'Android development project',
    text:
      'Built and tested an Android StickyNote app while practicing app lifecycle planning, maintainability, debugging, and deployment. This was an end-to-end project development experience that also involved a collaborative development model. This experience will be highly beneficial for my future work.'
  },
  {
    date: '2024 - Present',
    title: 'Game design research interest',
    text:
      'Explored how machine learning and procedural content generation can support game design, including levels, characters, and environments. I have researched and compared the mainstream pathfinding algorithms currently available on the market.'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    type: 'web',
    image: '/images/web-portfolio.svg',
    alt: 'Responsive portfolio website interface',
    summary:
      'This site is my CS601 term project. I rebuilt the portfolio as a React application with reusable data, hash-based navigation, accessible form labels, responsive layouts, and consistent project cards.',
    details: ['React components', 'Responsive layout', 'Accessible form'],
    status: 'Current term project'
  },
  {
    id: 2,
    title: 'Fresh Market Sorter',
    type: 'web',
    image: '/images/fresh-market.svg',
    alt: 'Produce cards sorted into fruit and vegetable baskets',
    summary:
      'A small interactive web project where users sort market items into categories. It helped me practice semantic HTML, CSS feedback, JavaScript events, and a clearer user flow.',
    details: ['HTML5', 'CSS feedback', 'JavaScript events'],
    status: 'Class project summary'
  },
  {
    id: 3,
    title: 'Android StickyNote App',
    type: 'mobile',
    image: '/images/android-note.svg',
    alt: 'Android phone screen with note cards',
    summary:
      'An Android app project focused on note taking and app lifecycle practice. I worked through planning, testing, error fixing, and making the code easier to maintain.',
    details: ['Android lifecycle', 'Debugging', 'Maintainability'],
    link: 'https://github.com/dlin1765/stickynote',
    linkLabel: 'View Code'
  },
  {
    id: 4,
    title: 'Student Calendar and Reminder App',
    type: 'app',
    image: '/images/calendar-app.svg',
    alt: 'Student calendar with task reminders',
    summary:
      'A student planning concept for tracking class tasks, notes, reminders, and account-based task management. The idea grew from my own need to see school work by date and time instead of only in a list.',
    details: ['Calendar view', 'Task notes', 'Login planning'],
    link: 'https://github.com/METCS-673SC1-Team-Project',
    linkLabel: 'View Code'
  },
  {
    id: 5,
    title: 'Unity Coin Collection Game with AI Agent',
    type: 'game',
    image: '/images/unity-agent.svg',
    alt: 'A game path with coins and an AI agent',
    summary:
      'A Unity game project where the player collects coins in 3D levels. I later connected it to an AI agent experiment, which made me think more carefully about game states, camera movement, and automated decision making.',
    details: ['Unity', 'Game logic', 'AI behavior'],
    status: 'Course project summary'
  },
  {
    id: 6,
    title: 'Algorithm for Game Design Research',
    type: 'research',
    image: '/images/game-research.svg',
    alt: 'Game design research board with procedural content blocks',
    summary:
      'A research direction focused on machine learning and procedural content generation for games. The goal is to understand how algorithms can help generate levels, characters, environments, and more varied player experiences.',
    details: ['Machine learning', 'PCG', 'Game design'],
    status: 'Research experience'
  },
  {
    id: 7,
    title: 'Company Website and API Support',
    type: 'web',
    image: '/images/api-web.svg',
    alt: 'Website interface connected to API blocks',
    summary:
      'During my software developer internship, I worked with web page content, HTML, CSS, JavaScript, and third-party API integration. The experience helped me connect classroom web concepts to real project requirements.',
    details: ['HTML/CSS/JS', 'API integration', 'UI collaboration'],
    status: 'Internship experience'
  }
];

export const skillGroups = [
  {
    title: 'Front-End Development',
    description:
      'Skills I use to turn content and design ideas into pages that are readable, responsive, and interactive.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Accessibility', 'Form Validation']
  },
  {
    title: 'Software and Mobile Development',
    description:
      'Programming and app-development skills from coursework, Android work, and project debugging.',
    items: ['Java', 'C++', 'Python', 'Android Development', 'Object-Oriented Design', 'Debugging', 'Testing']
  },
  {
    title: 'Game and AI Interests',
    description:
      'Areas I am exploring through Unity projects and research connected to game design algorithms.',
    items: ['Unity', 'Game Logic', 'AI Agent Behavior', 'Machine Learning Concepts', 'Procedural Content Generation']
  },
  {
    title: 'Project Workflow',
    description:
      'The practical habits that make projects easier to finish and explain to other people.',
    items: ['GitHub', 'VS Code', 'Project Documentation', 'Team Collaboration', 'API Integration', 'Product Planning']
  }
];

export const resumeItems = [
  {
    heading: 'Education',
    meta: 'Santa Clara University | B.S. in Computer Science | Software Focus | 2025',
    text:
      'My undergraduate work gave me a broad technical foundation, from programming and data structures to web usability, networks, operating systems, programming languages, and data science.',
    bullets: ['Computer Science Major completed', 'Software Focus completed', 'Selected coursework: Data Structures, Software Design, Web Usability, Networks, Operating Systems, Programming Languages, Data Science']
  },
  {
    heading: 'Software Developer Intern',
    meta: 'Fangxinyun Logistics Technology Co., Ltd | Jun 2023 - Aug 2023',
    text:
      'I supported website and feature development by working with page content, front-end code, API integration, and collaboration between design and implementation.',
    bullets: ['Built and updated page content with HTML, CSS, and JavaScript', 'Integrated third-party APIs into existing project infrastructure', 'Worked with UI/UX design requirements and helped turn them into usable web pages']
  },
  {
    heading: 'Android Developer',
    meta: 'Santa Clara University project | Oct 2023 - Dec 2023',
    text:
      'I practiced the Android app lifecycle by planning, testing, debugging, and improving a StickyNote application.',
    bullets: ['Improved modularity, testability, and maintainability', 'Identified and documented errors through testing', 'Prepared the app for a scalable and reliable user experience']
  },
  {
    heading: 'Research Experience',
    meta: 'Algorithm for Game Design | Mar 2024 - Present',
    text:
      'My research interest connects machine learning with procedural content generation for games, with the goal of supporting more dynamic levels, characters, and environments.',
    bullets: ['Explores machine learning in game development', 'Studies procedural content generation concepts', 'Connects technical algorithms with player-facing design']
  },
  {
    heading: 'Technical Toolkit',
    meta: 'Programming, web, and project tools',
    text:
      'My current toolkit includes front-end development, Android development, debugging and testing, project documentation, and programming in Java, C++, and Python.',
    bullets: ['Front-end: HTML, CSS, JavaScript, React', 'Programming: Java, C++, Python', 'Workflow: GitHub, documentation, collaboration, product planning']
  }
];
