import styles from './Vision.module.css'; 

export default function Vision() {
  return (
    <div className={styles.container}> {/* Brug container class her */}
      <h2>Vores Vision</h2>
      <p>Dette API leverer data om artister, scener og spilletider til Roskilde Festival 2025.</p>
      <p>Målet er at gøre det nemt for brugere at skræddersy deres eget program og finde nye musikalske oplevelser.</p>
      
      <div className={styles.links}>
        <h3>Nyttige Links</h3>
        <ul>
          {/* Husk at rette IP'en her hvis den er forkert */}
          <li>
            <a href="http://164.90.202.229:7071/artists" target="_blank" rel="noreferrer">
              🔗 Se Live API (Artister)
            </a>
          </li>
          <li>
            <a href="https://github.com/DIT-BRUGERNAVN/RoskildeAPI" target="_blank" rel="noreferrer">
              📂 GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}