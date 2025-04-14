import { Link, useNavigate } from 'react-router-dom';
import { Project } from '../assets/project.types.tsx';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card.tsx';
import { Button, buttonVariants } from './ui/button.tsx';
import Flex from './Flex.tsx';
import { FaEye, FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const navigate = useNavigate();

  const onCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.closest('a') ||
      target.closest('button')
    ) {
      return;
    }
    navigate(`/projects/${project.slug}`);
  };

  const hasDeployedUrl = Boolean(project.deploymentUrl);
  const buttonLabel = hasDeployedUrl ? 'Try Now' : 'View More';

  return (
    <Card
      style={{ maxWidth: '350px', cursor: 'pointer' }}
      className="object-cover transition-transform duration-500 hover:scale-105"
      onClick={onCardClick}>
      <CardHeader>
        <CardTitle className={'text-left'}>{project.title}</CardTitle>
      </CardHeader>

      <CardContent>
        {project.imageUrls ? (
          <img
            src={project.imageUrls[0]}
            alt={project.title}
            className="w-full h-36 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-36 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <div className="flex-grow flex-col flex-1"></div>
      </CardContent>

      <CardFooter className="flex justify-between flex-wrap">
        <Flex justify="flex-start" className="space-x-1">
          {hasDeployedUrl ? (
            <a
              href={project.deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-auto flex items-center gap-x-2">
                <FaArrowUpRightFromSquare className="w-4 h-4" />
                {buttonLabel}
              </Button>
            </a>
          ) : (
            <Link to={`/projects/${project.slug}`}>
              <Button className="w-full md:w-auto flex items-center gap-x-2">
                <FaEye className="w-4 h-4" />
                {buttonLabel}
              </Button>
            </Link>
          )}
        </Flex>

        <Flex justify="flex-end" className="hidden md:flex">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline' })}
            >
              <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
            </a>
          ) : (
            <Button disabled variant="outline">
              <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
            </Button>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );
}
export default ProjectCard;
