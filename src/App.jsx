import { useEffect, useMemo, useState } from 'react';
import { navItems, projects } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import SkillsPage from './pages/Skills';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';
import './styles.css';

const pageTitles = {
  home: 'Home',
  about: 'About',
  projects: 'Projects',
  skills: 'Skills',
  resume: 'Resume',
  contact: 'Contact'
};

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  return navItems.some((item) => item.id === hash) ? hash : 'home';
}

function getSavedContactDraft() {
  try {
    const savedDraft = localStorage.getItem('portfolioContactDraft');
    return savedDraft
      ? JSON.parse(savedDraft)
      : { name: '', email: '', topic: 'General question', message: '' };
  } catch (error) {
    localStorage.removeItem('portfolioContactDraft');
    return { name: '', email: '', topic: 'General question', message: '' };
  }
}

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [projectFilter, setProjectFilter] = useState('all');
  const [contactForm, setContactForm] = useState(getSavedContactDraft);
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = `${pageTitles[activePage]} | Runjie Lu Portfolio`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    localStorage.setItem('portfolioContactDraft', JSON.stringify(contactForm));
  }, [contactForm]);

  const projectTypes = useMemo(
    () => ['all', ...Array.from(new Set(projects.map((project) => project.type)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      projectFilter === 'all'
        ? projects
        : projects.filter((project) => project.type === projectFilter),
    [projectFilter]
  );

  function navigateTo(pageId) {
    window.location.hash = pageId;
    setActivePage(pageId);
  }

  function updateContactForm(event) {
    const { name, value } = event.target;
    setContactForm((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
    setFormStatus('');
  }

  function validateContactForm() {
    const errors = {};
    if (contactForm.name.trim().length < 2) {
      errors.name = 'Please enter at least two characters.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (contactForm.message.trim().length < 20) {
      errors.message = 'Please write a message with at least 20 characters.';
    }
    return errors;
  }

  function submitContactForm(event) {
    event.preventDefault();
    const errors = validateContactForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormStatus('Please complete the fields marked in red before submitting.');
      return;
    }

    setFormStatus(
      `Thank you, ${contactForm.name}. This demo form validated your message successfully. For a real message, please use the email link on this page.`
    );
    localStorage.removeItem('portfolioContactDraft');
    setContactForm({ name: '', email: '', topic: 'General question', message: '' });
  }

  function renderPage() {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return (
          <ProjectsPage
            projectTypes={projectTypes}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
            filteredProjects={filteredProjects}
          />
        );
      case 'skills':
        return <SkillsPage />;
      case 'resume':
        return <ResumePage />;
      case 'contact':
        return (
          <ContactPage
            contactForm={contactForm}
            formErrors={formErrors}
            formStatus={formStatus}
            updateContactForm={updateContactForm}
            submitContactForm={submitContactForm}
          />
        );
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header activePage={activePage} onNavigate={navigateTo} />
      <main id="main-content" className="site-main" tabIndex="-1">
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;
