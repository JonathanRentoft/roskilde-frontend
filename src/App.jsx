import './App.css'; // <--- VIGTIGT: Importer CSS filen her

import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Endpoints from './components/Endpoints';
import Vision from './components/Vision';
import Login from './components/Login';
import Admin from './components/Admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleLogin = (username, role) => {
    setUser({ username, role });
    setCurrentPage(role === 'ADMIN' ? 'admin' : 'home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'endpoints': return <Endpoints />;
      case 'vision': return <Vision />;
      case 'login': return <Login onLogin={handleLogin} />;
      case 'admin': return <Admin />;
      default: return <Home />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} user={user} setUser={setUser} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}