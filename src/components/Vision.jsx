export default function Vision() {
  return (
    <div className="container">
      <h2>🍊 Vores Vision</h2>
      <p>
        Roskilde Festival handler om mere end bare musik. Det handler om fællesskab, kærlighed og 
        Orange Feeling.
      </p>
      <p>
        Dette API er skabt for at give udviklere mulighed for at bygge fede apps, der kan 
        hjælpe festivalgængere med at få det bedste ud af ugen.
      </p>
      
      <div style={{marginTop: '40px', padding: '20px', border: '1px solid #ccc'}}>
        <h3>Teknisk Info</h3>
        <p>Projektet er bygget med:</p>
        <ul style={{lineHeight: '1.6'}}>
          <li><strong>Backend:</strong> Java / Kotlin med Javalin</li>
          <li><strong>Frontend:</strong> React (SPA)</li>
          <li><strong>Database:</strong> PostgreSQL</li>
          <li><strong>Deploy:</strong> Docker Containers</li>
        </ul>
      </div>
    </div>
  );
}