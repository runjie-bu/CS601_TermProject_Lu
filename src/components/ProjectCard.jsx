function ProjectCard({ project }) {
  return (
    <article className="project-card" data-type={project.type}>
      <img src={project.image} alt={project.alt} width="720" height="420" />
      <div className="project-card-body">
        <p className="project-type">{project.type}</p>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {project.link ? (
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkLabel}
          </a>
        ) : (
          <span className="project-status">{project.status}</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
