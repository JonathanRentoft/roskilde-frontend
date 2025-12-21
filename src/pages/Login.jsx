import { useState } from 'react';
import styles from './Login.module.css'; // Husk at lave denne css fil også!

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulerer login logic
    const role = username.toLowerCase() === 'admin' ? 'ADMIN' : 'USER';
    onLogin(username, role);
  };

  return (
    <div className={styles.container}>
      <h2>Log Ind</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="text" 
          placeholder="Brugernavn (skriv 'admin' for rettigheder)" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Log Ind</button>
      </form>
    </div>
  );
}