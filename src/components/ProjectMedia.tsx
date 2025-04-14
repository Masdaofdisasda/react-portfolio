import { Project } from '../assets/project.types.tsx';
import Flex from './Flex.tsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel.tsx';

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
    </>
  );
}

export default ProjectMedia;
