import { highlights } from '../data';

function HomePage({ onNavigate }) {
  return (
    <div className="page-layout">
      <section className="hero-card">
        <div className="hero-text">
          <p className="eyebrow">CS601 Term Project</p>
          <h1>My Web Development Portfolio</h1>
          <p>
            Welcome to my portfolio. This site introduces my background, selected projects, technical
            skills, and resume highlights in a React application that is designed to be clear,
            responsive, and easy to navigate.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => onNavigate('projects')}>
              View Projects
            </button>
            <button className="secondary-button" onClick={() => onNavigate('resume')}>
              View Resume
            </button>
          </div>
        </div>
        <img
          src="/images/web-portfolio.svg"
          alt="Illustration of a responsive portfolio website"
          width="720"
          height="420"
          className="hero-image"
        />
      </section>

      <section className="stats-grid" aria-label="Portfolio summary">
        {highlights.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="info-card">
          <h2>Project Goal</h2>
          <p>
            This portfolio is designed to show who I am as a student developer, not just what is listed on my resume. Each page has a clear purpose, from introducing my background to presenting my projects, skills, and experience. The content comes from my coursework, internship experience, Android app development, and interest in game-related software. I also focused on responsive design so the site can feel clean and usable on both desktop and mobile screens.
          </p>
        </article>
      </section>
    </div>
  );
}

export default HomePage;
