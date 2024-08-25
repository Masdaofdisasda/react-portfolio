import ProjectCard from '../components/ProjectCard.tsx';
import { projects } from '../assets/projects.tsx';
import Flex from '../components/Flex.tsx';

function Projects() {
  return (
    <Flex direction={'column'} style={{ maxWidth: "75%" }} gap={4}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Projects
    </h1>
      <Flex gap={4} className="mt-4" wrap="wrap" justify={'center'}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Projects;
