import logo from '../assets/logo.png'; 
import facade from "../utils/apiFacade";

export default function Header({ setCurrentPage, user, setUser }) {
  
  const handleFavoritesClick = () => {
    if (user) {
      setCurrentPage('favorites');
    } else {
      setCurrentPage('login'); 
    }
  };

  const handleLogout = () => {
    facade.logout();
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <header className="header">
      <img 
        src={logo} 
        alt="Logo" 
        className="logo-img" 
        onClick={() => setCurrentPage('home')} 
      />

      <nav>
        <button className="nav-btn" onClick={() => setCurrentPage('home')}>Forside</button>
        <button className="nav-btn" onClick={() => setCurrentPage('vision')}>Vision</button>
        <button className="nav-btn" onClick={() => setCurrentPage('endpoints')}>Endpoints</button>
        <button className="nav-btn" onClick={handleFavoritesClick}>Favoritter</button>

        {user && user.role === 'admin' && (
          <button className="nav-btn admin-btn" onClick={() => setCurrentPage('admin')}>Admin</button>
        )}

        {!user ? (
          <button className="nav-btn" onClick={() => setCurrentPage('login')}>Log Ind</button>
        ) : (
          <button className="nav-btn" onClick={handleLogout}>Log Ud</button>
        )}
      </nav>
    </header>
  );
}