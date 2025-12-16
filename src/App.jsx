import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Vision from './pages/Vision.jsx';
import Endpoints from './pages/Endpoints';


function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Roskilde Festival API 2025</h1>
          <div className="menu">
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/vision">Vision</NavLink>
            <NavLink to="/endpoints">Endpoints</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/endpoints" element={<Endpoints />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;