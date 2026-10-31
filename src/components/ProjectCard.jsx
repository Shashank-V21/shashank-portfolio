export default function ProjectCard({ project, index = 0 }) {
  return (
    <article
      className={`project-card project-card-editorial ${index % 2 ? "project-card-reverse" : ""}`}
    >
      <div className="project-art" aria-hidden="true">
        <span className="project-art-number mono">{project.number}</span>
        <span className="project-art-mark">{project.monogram}</span>
        <span className="project-art-caption mono">{project.category}</span>
        <span className="project-art-period mono">{project.period}</span>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="mono project-category">{project.category}</span>
          <span className="mono project-period">{project.period}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="tag-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.href && (
          <a
            className="text-link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel} <span>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
