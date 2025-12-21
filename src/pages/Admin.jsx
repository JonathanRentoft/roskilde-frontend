import styles from './Endpoints.module.css'; // Vi genbruger bare tabellens stil!

export default function Admin() {
  return (
    <div className={styles.wrapper}>
      <h2 style={{color: 'red'}}>🔒 Admin Panel</h2>
      <p>Velkommen admin. Her kan du slette og rette.</p>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Navn</th>
            <th>Handling</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kendrick Lamar</td>
            <td><button>Slet</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}