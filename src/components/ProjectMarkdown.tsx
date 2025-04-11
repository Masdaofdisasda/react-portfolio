import Markdown from 'react-markdown';
import Flex from './Flex.tsx';

const P: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
};
const H2: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h2
      className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    >
      {children}
    </h2>
  );
};

const UL: React.FC<React.HTMLProps<HTMLUListElement>> = ({
  children,
  ...props
}) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
};

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
