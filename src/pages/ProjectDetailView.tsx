import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects.tsx';
import Page from '../components/Page.tsx';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel.tsx';
import Flex from '../components/Flex.tsx';

function ProjectDetail() {
  const { id } = useParams();
  if (!id) {
    return <Page title={"Project not found"}></Page>
  }
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <Page title={"Project not found"}></Page>
  }

  return (
    <Page title={project.title}>
      <Flex direction="column" gap={3}>
        <Flex className={"w-full"} justify={'center'}>
          <p className="leading-7 text-start" style={{ maxWidth: '700px' }}>
            {project.description}
          </p>
        </Flex>
        {
          project.imageUrl && (
            <Flex>
              <Carousel style={{ maxWidth: '700px' }} >
                <CarouselContent>
                  {project.imageUrl.map((imageUri, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={'../'+imageUri}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </Flex>
          )
        }
      </Flex>

    </Page>
  );
}

export default ProjectDetail;
