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
        <Flex justify="center" className="w-full">
          <div className="relative w-full max-w-[700px]">
            <Carousel>
              <CarouselContent className="-ml-2 md:-ml-4">
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
              <div className="absolute top-1/2 left-2 flex items-center justify-center">
                <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-gray-400" />
              </div>
              <div className="absolute top-1/2 right-2 flex items-center justify-center">
                <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-gray-400" />
              </div>
            </Carousel>
          </div>
        </Flex>
      )}
    </>
  );
}

export default ProjectMedia;
