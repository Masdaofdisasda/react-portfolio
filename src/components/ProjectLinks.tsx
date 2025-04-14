import { Project } from '../assets/project.types.tsx';
import Flex from './Flex.tsx';
import { H1, UL } from './HtmlElementComponents.tsx';

type linkType = {
  label: string;
  url: string;
}

function ProjectLinks({ project }: { project: Project }) {
  const links: linkType[] = [
    project.githubUrl
      ? {
        label: "Code: ",
        url: project.githubUrl,
      }
      : null,
    project.youtubeUrl
      ? {
        label: "Video: ",
        url: project.youtubeUrl,
      }
      : null,
    project.deploymentUrl
      ? {
        label: "Live Demo: ",
        url: project.deploymentUrl,
      }
      : null,
  ].filter((link): link is linkType => link !== null);

  if (!links.length) return null;

  return (
    <Flex className={'w-full border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100'}>
      <p className="leading-7 text-start" style={{ maxWidth: '700px' }}>
        <H1>Links:</H1>
        <UL>
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <span>
                  <strong>{link.label}</strong>
                  {link.url.replace(/https?:\/\//, "")}
                </span>
              </a>
            </li>
          ))}
        </UL>
      </p>
    </Flex>
  );
}

export default ProjectLinks;
