// components/ProjectCard.tsx
import { Link } from 'react-router-dom';
import { Project } from '../assets/projects.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card.tsx';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select.tsx';
import { Button } from './ui/button.tsx';
import Flex from './Flex.tsx';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
  <Card style={{ maxWidth: '350px' }} className="object-cover transition-transform duration-500 hover:scale-105">
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription >{project.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48"
      />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Flex justify="flex-start">
        <Button variant="outline">Code</Button>
        <Button variant="outline">Video</Button>
      </Flex>
      <Button className={"bg-slate-800"}>View More</Button>
    </CardFooter>
  </Card>
  )
}
export default ProjectCard;
