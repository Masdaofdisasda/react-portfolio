import ProjectCard from '../components/ProjectCard.tsx';
import { projects } from '../assets/projects.tsx';
import Flex from '../components/Flex.tsx';
import Page from '../components/Page.tsx';

function Projects() {
  return (
    <Page title="Projects">

  <Flex gap={4} className="mt-4" wrap="wrap" justify={'center'}>
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </Flex>
    </Page>
  );
}

export default Projects;
