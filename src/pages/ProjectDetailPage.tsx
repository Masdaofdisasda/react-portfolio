import Page from '../components/Page.tsx';

import Flex from '../components/Flex.tsx';
import MarkdownComponent from '../components/MarkdownComponent.tsx';
import ProjectMedia from '../components/ProjectMedia.tsx';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../assets/projects.ts';
import { Project } from '../assets/project.types.tsx';
import ProjectLinks from '../components/ProjectLinks.tsx';
import { Button } from '../components/ui/button.tsx';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Page title="Not found"><p>Project not found.</p></Page>;

  return (
    <Page title={project.title}>
      <Flex justify="center">
        <Flex direction="column" className={'lg:w-3/4 xl:w-1/2 mx-8'} gap={3}>

          <Link to="/projects">
            <Button variant="ghost" className="w-fit flex items-center gap-x-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeftIcon className="w-4 h-4" />
              Projects
            </Button>
          </Link>

          <ProjectLinks project={project} />
          <MarkdownComponent markdown={project.markdown} />
          <ProjectMedia project={project as Project} />
        </Flex>
      </Flex>
    </Page>
  );
}
