import ProjectCard from '../components/ProjectCard.tsx';
import { projects } from '../assets/projects.tsx';

function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
