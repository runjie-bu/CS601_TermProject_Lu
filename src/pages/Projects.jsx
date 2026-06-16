import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage({ projectTypes, projectFilter, setProjectFilter, filteredProjects }) {
  return (
    <div className="page-layout">
      <PageHeader eyebrow="Projects" title="Featured Projects">
        The following projects showcase different facets of my growth as a student developer. They vary in nature; some focus on interface design and usability, while others center on programming logic. Hopefully I can add more projects in the future.
      </PageHeader>

      <section className="filter-panel" aria-label="Filter projects by category">
        {projectTypes.map((type) => (
          <button
            key={type}
            className={projectFilter === type ? 'filter-button active' : 'filter-button'}
            type="button"
            onClick={() => setProjectFilter(type)}
            aria-pressed={projectFilter === type}
          >
            {type === 'all' ? 'All Projects' : type.toUpperCase()}
          </button>
        ))}
      </section>

      <section className="project-grid" aria-live="polite">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
