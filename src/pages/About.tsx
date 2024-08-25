import Page from '../components/Page.tsx';
import Flex from '../components/Flex.tsx';

function About() {
  return (
    <Page title="About Me">

      <Flex justify="center">
        <Flex direction="column" className={"lg:w-3/4 xl:w-1/2 mx-8 text-start"}>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I'm David Köppl, also known as Wolum, a passionate developer with a love for design and a deep-seated
            curiosity. My coding journey began in 2012 when I set out to create an Android app to simplify my Latin
            homework searches. Spoiler: I ended up learning more about coding than Latin that year.
          </p>

          <h2
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            What I Do
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            My expertise lies in full-stack web development, and I am currently pursuing a degree in visual computing.
            Over the years, I have worked on various projects, building web applications and digitalizing manual
            processes. One of my personal passions is continuously improving my own render engine.
          </p>

          <h2
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Fun facts
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>My best code snippets are often written late at night.</li>
            <li>I once had coffee from Java, and it was absurdly strong.</li>
            <li>Apart from coding, I’m passionate about music production, DJ-ing, and cycling.</li>
          </ul>
        </Flex>
      </Flex>
    </Page>
  )
}

export default About
