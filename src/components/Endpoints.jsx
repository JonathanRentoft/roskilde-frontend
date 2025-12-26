export default function Endpoints() {
  return (
    <div className="container">
      <h2>📡 API Endpoints</h2>
      <p>Her er en oversigt over de tilgængelige ruter i vores Javalin backend.</p>
      
      <table className="simple-table">
        <thead>
          <tr>
            <th>Metode</th>
            <th>Sti (Path)</th>
            <th>Beskrivelse</th>
            <th>Rolle</th>
          </tr>
        </thead>
        <tbody>
          {/* Public Routes */}
          <tr><td>GET</td><td>/artists/</td><td>Hent alle kunstnere</td><td>ANYONE</td></tr>
          <tr><td>POST</td><td>/auth/login</td><td>Log ind</td><td>ANYONE</td></tr>
          <tr><td>POST</td><td>/auth/register</td><td>Opret ny bruger</td><td>ANYONE</td></tr>
          
          {/* User Routes */}
          <tr><td>GET</td><td>/favorites/</td><td>Se dine favoritter</td><td>USER</td></tr>
          <tr><td>POST</td><td>/favorites/{'{id}'}/</td><td>Tilføj favorit</td><td>USER</td></tr>
          <tr><td>DELETE</td><td>/favorites/{'{id}'}/</td><td>Fjern favorit</td><td>USER</td></tr>

          {/* Admin Routes */}
          <tr><td>POST</td><td>/artists/</td><td>Opret kunstner</td><td>ADMIN</td></tr>
          <tr><td>PUT</td><td>/artists/{'{id}'}/</td><td>Opdater kunstner</td><td>ADMIN</td></tr>
          <tr><td>DELETE</td><td>/artists/{'{id}'}/</td><td>Slet kunstner</td><td>ADMIN</td></tr>
        </tbody>
      </table>
    </div>
  );
}