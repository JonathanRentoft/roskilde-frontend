import React, { useState } from 'react';
import './App.css';

// --- KOMPONENTER ---

// 1. HEADER (Vises altid)
function Header({ skiftSide, user, logUd }) {
  return (
    <header>
      <div className="logo" onClick={() => skiftSide('forside')}>🍊 RoskildeAPI</div>
      <nav>
        <button onClick={() => skiftSide('forside')}>Forside</button>
        
        {!user ? (
          /* Vis kun hvis man IKKE er logget ind */
          <button onClick={() => skiftSide('login')}>Log Ind</button>
        ) : (
          /* Vis kun hvis man ER logget ind */
          <>
            {user.role === 'ADMIN' && (
              <button onClick={() => skiftSide('admin')}>🔒 Admin</button>
            )}
            <button className="btn-logout" onClick={logUd}>Log Ud ({user.name})</button>
          </>
        )}
      </nav>
    </header>
  );
}

// 2. FORSIDE
function Forside() {
  return (
    <div>
      <h1>Velkommen til Roskilde API'et</h1>
      <p>Dette er den simple forside. Brug menuen oppe til højre.</p>
    </div>
  );
}

// 3. LOGIN SIDE
function Login({ onLogin }) {
  const [navn, setNavn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // SIMPELT TJEK: Hvis man hedder "admin", bliver man admin.
    const rolle = navn.toLowerCase() === "admin" ? "ADMIN" : "USER";
    onLogin(navn, rolle);
  };

  return (
    <div>
      <h2>Log Ind</h2>
      <form onSubmit={handleSubmit} style={{maxWidth: '300px'}}>
        <input 
          placeholder="Brugernavn (skriv 'admin' for admin-rettigheder)" 
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
        />
        <input type="password" placeholder="Kodeord (ligegyldig)" />
        <button className="btn-orange">Log Ind</button>
      </form>
    </div>
  );
}

// 4. ADMIN PANEL (Tabellen)
function AdminPanel() {
  // Hardcoded data for nu - her ville du fetche fra din backend
  const acts = [
    { id: 1, navn: "Kendrick Lamar", scene: "Orange" },
    { id: 2, navn: "Blur", scene: "Arena" },
    { id: 3, navn: "Tobias Rahim", scene: "Orange" },
  ];

  return (
    <div>
      <h2>🔒 Admin: Ret Acts</h2>
      <p>Her kan du rette i databasen.</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kunstner</th>
            <th>Scene</th>
            <th>Handling</th>
          </tr>
        </thead>
        <tbody>
          {acts.map(act => (
            <tr key={act.id}>
              <td>{act.id}</td>
              <td>{act.navn}</td>
              <td>{act.scene}</td>
              <td><button style={{color:'red', border:'none', background:'none', cursor:'pointer'}}>Slet</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- HOVED APP ---

export default function App() {
  // STATE: Her styrer vi hele showet
  const [side, setSide] = useState('forside'); // 'forside', 'login', 'admin'
  const [user, setUser] = useState(null);      // null eller { name: '...', role: '...' }

  // Funktion til at logge ind
  const logInd = (navn, rolle) => {
    setUser({ name: navn, role: rolle });
    setSide(rolle === 'ADMIN' ? 'admin' : 'forside'); // Send admin direkte til panelet
  };

  // Funktion til at logge ud
  const logUd = () => {
    setUser(null);
    setSide('forside');
  };

  return (
    <div className="App">
      {/* 1. Vis Header */}
      <Header skiftSide={setSide} user={user} logUd={logUd} />

      {/* 2. Vis indhold baseret på hvilken 'side' der er valgt */}
      <main>
        {side === 'forside' && <Forside />}
        {side === 'login'   && <Login onLogin={logInd} />}
        {side === 'admin'   && <AdminPanel />}
      </main>
    </div>
  );
}