import { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpel logik: Hvis man hedder 'admin', får man ADMIN rollen. Ellers USER.
    const role = username.toLowerCase() === 'admin' ? 'ADMIN' : 'USER';
    onLogin(username, role);
  };

  return (
    <div className="form-box">
      <h2>Log Ind</h2>
      <p>Skriv <strong>admin</strong> for at teste admin-panelet.</p>
      <form onSubmit={handleSubmit}>
        <input 
          className="input-field"
          type="text" 
          placeholder="Brugernavn" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="action-btn">Log Ind</button>
      </form>
    </div>
  );
}