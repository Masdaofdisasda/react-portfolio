import Page from '../components/Page.tsx';
import Flex from '../components/Flex.tsx';

import pdf from '../../images/Resume.pdf';
import { buttonVariants } from '../components/ui/button.tsx';

function Resume() {
  return (
    <Page title="Resume">
      <Flex direction="column" gap={3} className="items-center">

        <Flex className="w-full xl:w-2/3 mx-auto">
          <object data={pdf} type="application/pdf" width="100%" height="600px">
            <div>Could not display resume.</div>
          </object>
        </Flex>

        <Flex justify="flex-end" className="w-full xl:w-2/3 mx-auto">
          <a
            href={pdf}
            download="Koeppl David Resume.pdf"
            className={buttonVariants()}
          >
            Download Resume
          </a>
        </Flex>
      </Flex>
    </Page>

  );
}

export default Resume;
