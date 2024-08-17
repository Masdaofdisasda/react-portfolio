import { Card } from '../components/ui/card.tsx';

function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p className="mt-2">Description of project 1...</p>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold">Project 2</h2>
          <p className="mt-2">Description of project 2...</p>
        </Card>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
}

export default Projects;
