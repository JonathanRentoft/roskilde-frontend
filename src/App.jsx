import { useState } from 'react';

// 1. Importer siderne fra din pages mappe
import Home from './pages/Home';
import Endpoints from './pages/Endpoints';
import Vision from './pages/Vision';
import Login from './pages/Login';
import Admin from './pages/Admin';

// 2. Vi laver lidt CSS til layoutet her (eller i App.css)
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  borderBottom: '1px solid #eee',
  alignItems: 'center'
};

const btnStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  marginLeft: '15px',
  color: '#555'
};

export default function App() {
  // State til at styre hvilken side vi ser
  const [currentPage, setCurrentPage] = useState('home');
  // State til at styre brugeren (null = ikke logget ind)
  const [user, setUser] = useState(null);

  // Funktion der håndterer login fra Login.jsx
  const handleLogin = (username, role) => {
    setUser({ username, role });
    setCurrentPage(role === 'ADMIN' ? 'admin' : 'home');
  };

  // Funktion til at bestemme hvilket "view" der skal vises
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
      {/* --- HEADER --- */}
      <header style={navStyle}>
        <div 
          style={{color: '#ff6b00', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer'}}
          onClick={() => setCurrentPage('home')}
        >
          🍊 RoskildeAPI
        </div>
        
        <nav>
          <button style={btnStyle} onClick={() => setCurrentPage('home')}>Forside</button>
          <button style={btnStyle} onClick={() => setCurrentPage('vision')}>Vision</button>
          <button style={btnStyle} onClick={() => setCurrentPage('endpoints')}>Endpoints</button>
          
          {/* Vis kun Admin-knap hvis brugeren er ADMIN */}
          {user && user.role === 'ADMIN' && (
            <button style={{...btnStyle, color: 'red'}} onClick={() => setCurrentPage('admin')}>Admin</button>
          )}

          {/* Login / Logout knap */}
          {!user ? (
            <button style={btnStyle} onClick={() => setCurrentPage('login')}>Log Ind</button>
          ) : (
            <button style={btnStyle} onClick={() => setUser(null)}>Log Ud ({user.username})</button>
          )}
        </nav>
      </header>

      {/* --- HER VISES DEN VALGTE SIDE --- */}
      <main>
        {renderPage()}
      </main>
    </div>
  );
}