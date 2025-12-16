import styles from './Endpoints.module.css';

export default function Endpoints() {
  return (
    <div className={styles.wrapper}>
      <h2>API Endpoints</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Description</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/artists</td>
            <td>Henter alle artister</td>
            <td>ANYONE</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/auth/login</td>
            <td>Login og modtag token</td>
            <td>ANYONE</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/favorites/{'{id}'}</td>
            <td>Tilføj artist til favoritter</td>
            <td>USER</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}