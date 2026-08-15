import Card from "./ui/Card";
import Button from "./ui/Button";

function ProjectCard({ project, onOpenDetails }) {
  return (
    <Card className="project-card">
      <div className="project-card-body">
        <p className="project-domain">{project.domain}</p>
        <p className="project-metric">{project.metric}</p>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="project-tech-list">
          {project.tech.map((tag) => (
            <span key={tag} className="project-tech-badge">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Button href={project.live} target="_blank" rel="noreferrer" variant="ghost">
            Live Case
          </Button>
          <Button onClick={() => onOpenDetails(project)} variant="primary">
            Outcome Details
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
