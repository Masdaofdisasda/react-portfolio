import Page from '../components/Page.tsx';

import Flex from '../components/Flex.tsx';
import ProjectMarkdown from '../components/ProjectMarkdown.tsx';
import ProjectMedia from '../components/ProjectMedia.tsx';
import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects.ts';
import { Project } from '../assets/project.types.tsx';
import ProjectLinks from '../components/ProjectLinks.tsx';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Page title="Not found"><p>Project not found.</p></Page>;

  return (
    <Page title={project.title}>
      <Flex justify="center">
        <Flex direction="column" className={'lg:w-3/4 xl:w-1/2 mx-8'} gap={3}>
          <ProjectLinks project={project} />
          <ProjectMarkdown markdown={project.markdown} />
          <ProjectMedia project={project as Project} />
        </Flex>
      </Flex>
    </Page>
  );
}
