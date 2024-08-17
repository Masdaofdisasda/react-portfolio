import { Card } from '../components/ui/card.tsx';
import { Button } from '../components/ui/button.tsx';


function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">This is the home page. You can navigate to different sections using the links above.</p>
      <Card className="mt-6 p-4">
        <h2 className="text-xl font-semibold">Featured Project</h2>
        <p className="mt-2">Check out one of my coolest projects!</p>
        <Button className="mt-4">View Project</Button>
      </Card>
    </div>
  );
}

export default Home;
