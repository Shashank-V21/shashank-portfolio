import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section className="section container" id="work">
      <SectionHeading index="01" eyebrow="SELECTED WORK" title="Projects built through exploration." description="A selection of academic and personal projects across computer vision, AI-powered applications, and web development." />
      <div className="projects-grid projects-editorial-grid">
        {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
      </div>
    </section>
  );
}
