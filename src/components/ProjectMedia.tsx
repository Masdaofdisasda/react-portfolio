import { Project } from '../assets/oldprojects.tsx';
import Flex from './Flex.tsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel.tsx';
import { Button } from './ui/button.tsx';
import { FaGithub } from 'react-icons/fa';

export type ProjectMediaProps = {
  project: Project;
};

function ProjectMedia({ project }: Readonly<ProjectMediaProps>) {
  return (
    <>
      {project.imageUrls && (
        <Flex>
          <Carousel style={{ maxWidth: '700px' }}>
            <CarouselContent className={'-ml-2 md:-ml-4'}>
              {project.imageUrls.map((imageUri, index) => (
                <CarouselItem key={index} className="md:basis-1 lg:basis-7/12">
                  <img
                    src={'../' + imageUri}
                    alt={project.title}
                    className="w-full md:h-48 lg:h-96 object-cover rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Flex>
      )}
      {project.youtubeUrl && (
        <Flex justify="center">
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
            }}
          >
            <iframe
              src={project.youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        </Flex>
      )}
      {project.githubUrl && (
        <Flex justify="center">
          <Button variant="outline" className="flex items-center space-x-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-slate-800 hover:text-gray-600" />
            </a>
          </Button>
        </Flex>
      )}
    </>
  );
}

export default ProjectMedia;
