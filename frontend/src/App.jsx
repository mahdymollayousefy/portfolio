import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import HireMe from './pages/HireMe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hire-me" element={<HireMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
