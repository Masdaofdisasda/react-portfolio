import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';
import Layout from './components/Layout.tsx';
import ProjectDetail from './pages/ProjectDetailView.tsx';
import { NavigationMenuDemo } from './components/TestMenu+.tsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/test" element={<NavigationMenuDemo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
