export default function Admin() {
  // Hardcoded data for visuelt eksempel
  const artists = [
    { id: 1, name: "Kendrick Lamar", stage: "Orange" },
    { id: 2, name: "Blur", stage: "Arena" },
    { id: 3, name: "Tobias Rahim", stage: "Orange" },
  ];

  return (
    <div className="container">
      <h2 style={{color: 'red'}}>🔒 Admin Panel</h2>
      <p>Administrer festivalens kunstnere her.</p>
      
      <button className="action-btn" style={{maxWidth: '200px', marginBottom: '20px'}}>+ Opret Ny</button>

      <table className="simple-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Navn</th>
            <th>Scene</th>
            <th>Handling</th>
          </tr>
        </thead>
        <tbody>
          {artists.map(artist => (
            <tr key={artist.id}>
              <td>{artist.id}</td>
              <td>{artist.name}</td>
              <td>{artist.stage}</td>
              <td>
                <button style={{marginRight: '10px', cursor:'pointer'}}>Ret</button>
                <button style={{color: 'red', cursor:'pointer'}}>Slet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}