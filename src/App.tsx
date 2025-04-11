import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import Layout from './components/Layout.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import { Theme, ThemeProvider } from './components/ThemeProvider.tsx';
import { useState } from 'react';
import { ProjectDetailPage } from './pages/ProjectDetailPage.tsx';

function App() {
  const [theme] = useState<Theme>('light');

  return (
    <ThemeProvider defaultTheme={theme} storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<ProjectDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
