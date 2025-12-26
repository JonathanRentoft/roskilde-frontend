import React from 'react';

export default function Vision() {
  return (
    <div className="container">
      <h2>Projekt & Arkitektur</h2>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        Eksamensopgave: Full Stack Festival API
      </p>

      <div style={{ marginTop: '30px' }}>
        <h3>Projektets Formål</h3>
        <p>
          Formålet med denne applikation er at demonstrere en moderne Client-Server arkitektur.
          Løsningen består af en Single Page Application (SPA) skrevet i React, der kommunikerer 
          med en RESTful backend. Projektet simulerer et administrativt system for Roskilde Festival, 
          hvor brugere kan se data, og administratorer kan manipulere den.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Sikkerhedsimplementering (Auth & JWT)</h3>
        <p>
          Sikkerheden er bygget op omkring en <strong>stateless arkitektur</strong> ved brug af 
          JSON Web Tokens (JWT).
        </p>
        <ul style={{ lineHeight: '1.6', marginTop: '10px' }}>
          <li style={{marginBottom: '10px'}}>
            <strong>Hvorfor JWT?</strong> Valget faldt på JWT for at undgå server-side sessions. 
            Når brugeren logger ind, udstedes en signeret token, som klienten (browseren) gemmer. 
            Dette gør API'et skalerbart, da serveren ikke skal huske staten for hver bruger.
          </li>
          <li style={{marginBottom: '10px'}}>
            <strong>Rollebaseret Adgangskontrol (RBAC):</strong> Backend verificerer brugerens rolle 
            (claim) i tokenet ved hvert kald til beskyttede endpoints.
            <ul>
              <li><strong>USER:</strong> Har læserettigheder og adgang til egne favoritter.</li>
              <li><strong>ADMIN:</strong> Har fuld CRUD-adgang til artist-databasen.</li>
            </ul>
          </li>
          <li>
            <strong>Password Security:</strong> I produktionsmiljøet håndteres passwords via hashing (BCrypt), 
            således at ingen passwords lagres i klar tekst.
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Teknologistak</h3>
        <table className="simple-table" style={{ maxWidth: '600px' }}>
          <tbody>
            <tr>
              <td><strong>Frontend</strong></td>
              <td>React (Vite), React Router, JS</td>
            </tr>
            <tr>
              <td><strong>Backend</strong></td>
              <td>Java / Kotlin med Javalin (Lightweight Framework)</td>
            </tr>
            <tr>
              <td><strong>Database</strong></td>
              <td>PostgreSQL (Relationel database)</td>
            </tr>
            <tr>
              <td><strong>Deployment</strong></td>
              <td>Docker Containers på DigitalOcean (Droplet)</td>
            </tr>
            <tr>
              <td><strong>CI/CD</strong></td>
              <td>GitHub Actions (Workflow pipeline)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h3>Kildekode</h3>
        <p>Den fulde kildekode inklusiv backend-logik og test-setup kan findes her:</p>
        
        <a 
          href="https://github.com/JonathanRentoft/RoskildeAPI" 
          target="_blank" 
          rel="noreferrer"
          className="action-btn"
          style={{ display: 'inline-block', textDecoration: 'none', width: 'auto', padding: '15px 30px', marginTop: '10px' }}
        >
          Åbn GitHub Repository
        </a>
      </div>
    </div>
  );
}