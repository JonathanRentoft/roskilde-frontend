import { useState } from 'react';
import { Routes, Route } from "react-router-dom"; // sørger for SPA, da siderne ikke genindlæes
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Endpoints from './components/Endpoints';
import Vision from './components/Vision';
import Login from './components/Login';
import Admin from './components/Admin';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, role) => {
    setUser({ username, role });
  };

  return (
    <div>
      <Header user={user} setUser={setUser} />
      
      <main>
        <Routes>
          {/* Almindelige ruter */}
          <Route path="/" element={<Home />} />
          <Route path="/endpoints" element={<Endpoints />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/favorites" element={<Favorites user={user} />} />

          <Route path="/admin" element={<Admin />}> 
            {/* Denne rute vises KUN hvis URL er /admin/details */}
            <Route path="details" element={<h3 style={{color: 'green'}}>Sub-route eksemepel(Nested Route)</h3>} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}