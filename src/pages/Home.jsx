import styles from './Home.module.css'; // Vi bruger CSS Modules!
import logo from '../assets/logo.png'; // Husk at lægge billedet her

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Velkommen til Festival Appen</h2>
      <img src={logo} alt="Roskilde Logo" className={styles.logo} />
      <p>Din ultimative guide til musikken, scenerne og festen.</p>
    </div>
  );
}