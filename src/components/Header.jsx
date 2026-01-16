import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'; 
import facade from "../utils/apiFacade";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    facade.logout();
    setUser(null);
    navigate("/"); // Sender brugeren til forsiden efter man logger ud
  };

  return (
    <header className="header">
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo" 
          className="logo-img" 
        />
      </Link>

      <nav>
        
        <NavLink to="/" className="nav-btn">Forside</NavLink>
        <NavLink to="/vision" className="nav-btn">Vision</NavLink>
        <NavLink to="/endpoints" className="nav-btn">Endpoints</NavLink>
        
        <NavLink to={user ? "/favorites" : "/login"} className="nav-btn">
          Favoritter
        </NavLink>

        {user && user.role === 'admin' && ( //logical and operator
          <NavLink to="/admin" className="nav-btn admin-btn">Admin</NavLink>
        )}

        {!user ? ( //ternary operator 
          <NavLink to="/login" className="nav-btn">Log Ind</NavLink>
        ) : (
          <button className="nav-btn" onClick={handleLogout}>Log Ud</button>
        )}
      </nav>
    </header>
  );
}