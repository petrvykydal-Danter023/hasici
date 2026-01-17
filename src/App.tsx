
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Jsdho from './pages/Jsdho';
import Technika from './pages/Technika';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jsdho" element={<Jsdho />} />
        <Route path="technika" element={<Technika />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Route>
    </Routes>
  );
}

export default App;
