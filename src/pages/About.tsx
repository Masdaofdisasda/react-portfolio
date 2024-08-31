import Page from '../components/Page.tsx';
import Flex from '../components/Flex.tsx';

function About() {
  return (
    <Page title="About Me">
      <Flex justify="center">
        <Flex
          direction="column"
          className={'lg:w-3/4 xl:w-1/2 mx-8 text-start'}
        >
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Hi, I am David Köppl, a passionate software developer with a love
            for design and a natural curiosity. I first started writing software
            in 2012 when I set out to create an Android app to simplify my Latin
            homework. I probably learned more about programming than Latin that
            year. Later on I had lots of fun writing SPS programms and designing
            visualization for them, so I decided to study about it.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            What I Do
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            My expertise lies in full-stack web development, and I am currently
            pursuing a degree in visual computing. Over the years, I have worked
            on various professional projects, including web applications and
            digitalizing manual processes, data migration and UI libraries. One
            of my favorite personal projects is working on my game engine,
            understanding and solving challenges in this performance critical,
            complex application.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Fun facts
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>I can really think well and get in the zone late at night.</li>
            <li>I once had coffee from Java, and it was absurdly strong.</li>
            <li>I produce music and DJ as Wolum.</li>
          </ul>
        </Flex>
      </Flex>
    </Page>
  );
}

export default About;
