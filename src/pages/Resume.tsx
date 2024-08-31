import Page from '../components/Page.tsx';
import Flex from '../components/Flex.tsx';

import pdf from '/images/Resume.pdf';
import { buttonVariants } from '../components/ui/button.tsx';

function Resume() {
  return (
    <Page title="Resume">
      <Flex direction="column" gap={3} className="items-center h-screen">
        <Flex className="w-full xl:w-2/3 mx-auto  h-full">
          <object data={pdf} type="application/pdf" className="w-full h-full">
            <Flex direction={'column'} gap={3}>Could not display resume.

              <a
                href={pdf}
                download="Koeppl David Resume.pdf"
                className={buttonVariants()}
              >
                Click here to download it.
              </a></Flex>
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
