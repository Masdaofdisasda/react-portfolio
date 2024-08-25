import { Card } from '../components/ui/card.tsx';
import { Button } from '../components/ui/button.tsx';
import Page from '../components/Page.tsx';

function Resume() {
  return (
    <Page title="Resume">
      <Card className="mt-6 p-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <p className="mt-2">Details about your work experience...</p>
      </Card>
      <Card className="mt-6 p-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="mt-2">Details about your education...</p>
      </Card>
      <Button className="mt-6">Download Resume</Button>
    </Page>
  );
}

export default Resume;
