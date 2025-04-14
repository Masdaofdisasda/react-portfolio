import ProjectCard from '../components/ProjectCard.tsx';
import Flex from '../components/Flex.tsx';
import Page from '../components/Page.tsx';
import { projects } from '../assets/projects.ts';
import { Project } from '../assets/project.types.tsx';

function Projects() {
  return (
    <Page title="Projects">
      <Flex gap={4} className="mt-4" wrap="wrap" justify={'center'}>
        {projects
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((project) => (
            <ProjectCard key={project.slug} project={project as Project} />
          ))}
      </Flex>
    </Page>
  );
}

export default Projects;
