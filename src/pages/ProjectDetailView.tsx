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
      <Flex justify="center">
        <Flex direction="column" className={"lg:w-3/4 xl:w-1/2 mx-8"} gap={3}>
        <Flex className={"w-full"} justify={'center'}>
          <p className="leading-7 text-start" style={{ maxWidth: '700px' }}>
            {project.description}
          </p>
        </Flex>
        {
          project.imageUrl && (
            <Flex>
              <Carousel style={{ maxWidth: '700px' }} >
                <CarouselContent className={'-ml-2 md:-ml-4'}>
                  {project.imageUrl.map((imageUri, index) => (
                    <CarouselItem key={index} className="md:basis-1 lg:basis-7/12">
                      <img
                        src={'../'+imageUri}
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
          )
        }
        {project.youtubeUrl && (
          <Flex justify="center">
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
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

      </Flex>
      </Flex>

    </Page>
  );
}

export default ProjectDetail;
