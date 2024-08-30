import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';
import Layout from './components/Layout.tsx';
import ProjectDetail from './pages/ProjectDetailView.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import { Theme, ThemeProvider } from './components/ThemeProvider.tsx';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
