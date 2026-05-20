import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import HireMe from './pages/HireMe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="hire-me" element={<HireMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
