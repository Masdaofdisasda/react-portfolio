// pages/ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects.tsx';

function ProjectDetail() {
  const { id } = useParams();
  if (!id) {
    return <div>Project not found</div>;
  }
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-96 object-cover mt-6"
      />
      {project.youtubeUrl && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="315"
            src={project.youtubeUrl}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="mt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;
