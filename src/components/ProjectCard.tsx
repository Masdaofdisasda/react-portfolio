// components/ProjectCard.tsx
import { Link } from 'react-router-dom';
import { Project } from '../assets/projects.tsx';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card.tsx';
import { Button, buttonVariants } from './ui/button.tsx';
import Flex from './Flex.tsx';
import { FaGithub, FaYoutube } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
  <Card style={{ maxWidth: '350px' }} className="object-cover transition-transform duration-500 hover:scale-105">
    <CardHeader>
      <CardTitle className={'text-left'}>{project.title}</CardTitle>
    </CardHeader>
    <CardContent>
      {project.imageUrl ? (
        <img
          src={project.imageUrl[0]}
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
      <Flex justify="flex-start" className="hidden md:flex space-x-1">
        {
          project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
            </a>
          ) : (
            <Button disabled={true} variant="outline">
              <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" /></Button>
          )
        }
        {
          project.youtubeUrl ? (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <FaYoutube className="w-6 h-6 text-slate-800 hover:text-red-600" />
            </a>
          ) : (
            <Button disabled={true} variant="outline">
              <FaYoutube className="w-6 h-6 text-slate-800 hover:text-red-600" /></Button>
          )
        }
      </Flex>
      <Flex justify="flex-end" className="w-full md:w-auto">
        <Link to={`/projects/${project.id}`}>
          <Button variant="outline" className="primary w-full md:w-auto">View More</Button>
        </Link>
      </Flex>
    </CardFooter>
  </Card>
  )
}
export default ProjectCard;
