import { resumeItems } from '../data';
import PageHeader from '../components/PageHeader';

function ResumePage() {
  return (
    <div className="page-layout narrow-layout">
      <PageHeader eyebrow="Resume" title="Resume Highlights">
        This page is a web-friendly version of my resume. Instead of copying the PDF word for word, it
        summarizes the experiences that best support my portfolio.
      </PageHeader>

      <section className="resume-list">
        {resumeItems.map((item) => (
          <article key={item.heading} className="resume-item">
            <p className="resume-meta">{item.meta}</p>
            <h2>{item.heading}</h2>
            <p>{item.text}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

    </div>
  );
}

export default ResumePage;
