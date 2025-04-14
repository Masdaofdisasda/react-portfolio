import Page from '../components/Page.tsx';
import Flex from '../components/Flex.tsx';
import MarkdownComponent from '../components/MarkdownComponent.tsx';

import { markdown } from '../content/about.md';

function About() {
  return (
    <Page title="About Me">
      <Flex justify="center">
        <Flex
          direction="column"
          className={'lg:w-3/4 xl:w-1/2 mx-8 text-start'}
        >
          <MarkdownComponent markdown={markdown} />
        </Flex>
      </Flex>
    </Page>
  );
}

export default About;
