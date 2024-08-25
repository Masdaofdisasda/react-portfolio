// components/ProjectCard.tsx
import { Link } from 'react-router-dom';
import { Project } from '../assets/projects.tsx';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-2">{project.description}</p>
      <div className="mt-4">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="mt-4 flex space-x-4">
        {project.youtubeUrl && (
          <a
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Watch Video
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Source
          </a>
        )}
        <Link
          to={`/projects/${project.id}`}
          className="text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
