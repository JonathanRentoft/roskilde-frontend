// Bruger et online billede som placeholder. Du kan skifte til et lokalt billede hvis du vil.
const concertImage = "https://images.unsplash.com/photo-1459749411177-287ce63e3ba0?q=80&w=2000&auto=format&fit=crop";

export default function Home() {
  const schedule = {
    Onsdag: [{ tid: "17:00", navn: "Blæst", scene: "Eos" }, { tid: "20:00", navn: "Post Malone", scene: "Orange" }],
    Torsdag: [{ tid: "14:00", navn: "Zar Paulo", scene: "Arena" }, { tid: "22:00", navn: "Dua Lipa", scene: "Orange" }],
    Fredag: [{ tid: "16:00", navn: "The Minds of 99", scene: "Orange" }, { tid: "23:00", navn: "Fred again..", scene: "Apollo" }],
    Lørdag: [{ tid: "19:00", navn: "Artigeardit", scene: "Arena" }, { tid: "23:00", navn: "Kendrick Lamar", scene: "Orange" }]
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <img src={concertImage} alt="Concert" className="hero-img" />
        <div className="hero-text">
          <h1>ROSKILDE 2025</h1>
          <p>Orange Feeling</p>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="container">
        <h2>📅 Spilleplan</h2>
        <div className="schedule-grid">
          {Object.entries(schedule).map(([dag, acts]) => (
            <div key={dag} className="day-card">
              <h3>{dag}</h3>
              <table className="simple-table">
                <tbody>
                  {acts.map((act, i) => (
                    <tr key={i}>
                      <td>{act.tid}</td>
                      <td><strong>{act.navn}</strong></td>
                      <td>{act.scene}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}