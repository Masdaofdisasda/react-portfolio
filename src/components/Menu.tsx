import { Button } from './ui/button.tsx';
import { Link } from 'react-router-dom';

export function MenubarComponent() {

  return (

    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="container flex justify-between items-center">
        <nav className="flex">
          <Link to="/">
            <Button variant="link" className="text-blue-600 hover:text-blue-800">
              Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="link" className="text-blue-600 hover:text-blue-800">
              Projects
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="link" className="text-blue-600 hover:text-blue-800">
              Resume
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="link" className="text-blue-600 hover:text-blue-800">
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
