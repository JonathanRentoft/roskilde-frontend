import logo from '../assets/logo.png'; 

export default function Header({ setCurrentPage, user, setUser }) {
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

        {user && user.role === 'ADMIN' && (
          <button className="nav-btn admin-btn" onClick={() => setCurrentPage('admin')}>Admin</button>
        )}

        {!user ? (
          <button className="nav-btn" onClick={() => setCurrentPage('login')}>Log Ind</button>
        ) : (
          <button className="nav-btn" onClick={() => setUser(null)}>Log Ud</button>
        )}
      </nav>
    </header>
  );
}