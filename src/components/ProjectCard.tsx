// components/ProjectCard.tsx
import { Link } from 'react-router-dom';
import { Project } from '../assets/projects.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card.tsx';
import { Button, buttonVariants } from './ui/button.tsx';
import Flex from './Flex.tsx';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
  <Card style={{ maxWidth: '350px' }} className="object-cover transition-transform duration-500 hover:scale-105">
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription className={"clamp-3"}>{project.description}</CardDescription>
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
              Code
            </a>
          ) : (
            <Button disabled={true} variant="outline">Code</Button>
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
              Video
            </a>
          ) : (
            <Button disabled={true} variant="outline">Video</Button>
          )
        }
      </Flex>
      <Flex justify="flex-end" className="w-full md:w-auto">
        <Link to={`/projects/${project.id}`}>
          <Button className="bg-slate-800 w-full md:w-auto">View More</Button>
        </Link>
      </Flex>
    </CardFooter>
  </Card>
  )
}
export default ProjectCard;
