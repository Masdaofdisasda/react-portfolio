import Markdown from 'react-markdown';
import Flex from './Flex.tsx';
import { H2, P, UL } from './HtmlElementComponents.tsx';

export type ProjectMarkdownProps = {
  markdown: string;
}

function ProjectMarkdown({ markdown }: Readonly<ProjectMarkdownProps>) {
  return (
    <Flex className={'w-full'} justify={'center'}>
      <p className="leading-7 text-start" style={{ maxWidth: '700px' }}>
        <Markdown
          components={{
            p: P,
            h2: H2,
            ul: UL,
          }}
        >
          {markdown}
        </Markdown>
      </p>
    </Flex>
  );
}

export default ProjectMarkdown;
