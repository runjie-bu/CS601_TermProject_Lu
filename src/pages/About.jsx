import { aboutCards, learningTimeline } from '../data';
import PageHeader from '../components/PageHeader';

function AboutPage() {
  return (
    <div className="page-layout narrow-layout">
      <PageHeader eyebrow="About" title="About Me">
        I am a computer science graduate with a Software Focus, and I enjoy building practical software
        that connects clean interfaces with real user needs.
      </PageHeader>

      <section className="content-grid two-column">
        {aboutCards.map((card) => (
          <article className="info-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="timeline" aria-label="Learning timeline">
        <h2>Learning Timeline</h2>
        <ol className="timeline-list">
          {learningTimeline.map((item) => (
            <li key={item.title}>
              <span>{item.date}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default AboutPage;
