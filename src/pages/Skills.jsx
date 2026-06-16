import { skillGroups } from '../data';
import PageHeader from '../components/PageHeader';

function SkillsPage() {
  return (
    <div className="page-layout">
      <PageHeader eyebrow="Skills" title="Skills I Am Building">
        The following are the skills I currently possess; they reflect my practical experience in web development, mobile applications, game-related projects, and the development of team collaboration software.
      </PageHeader>

      <section className="skill-card-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="info-card skill-card">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <ul className="chip-list">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="info-card skills-note">
        <h2>How These Skills Fit Together</h2>
        <p>
          Front-end work helps me shape the user experience, while programming and debugging help me
          make the application reliable. My game and AI interests give me another way to practice logic,
          data, and user interaction. Together, these skills support my goal of becoming a stronger
          full-stack software developer.
        </p>
      </section>
    </div>
  );
}

export default SkillsPage;
