import { useState, useEffect } from 'react';
import facade from '../utils/apiFacade'; // Husk at importere facaden!

import concertImage from '../assets/roskilde-scene.jpeg';

export default function Home() {
  // State til at gemme vores spilleplan
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Vi henter kunstnere fra API'et når siden loader
    facade.getArtists()
      .then((data) => {
        // Dataen kommer som en lang liste. Vi skal sortere den i dage.
        const sortedSchedule = {};
        
        data.forEach((artist) => {
          const day = artist.day || "Andre Dage"; // Fallback hvis dag mangler
          
          if (!sortedSchedule[day]) {
            sortedSchedule[day] = [];
          }
          
          sortedSchedule[day].push({
            tid: artist.time || "TBA", // Fallback hvis tid mangler
            navn: artist.name,
            scene: artist.stage || "Ukendt Scene"
          });
        });

        setSchedule(sortedSchedule);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fejl ved hentning af artister:", err);
        setError("Kunne ikke hente spilleplanen. Er serveren tændt?");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <img src={concertImage} alt="Concert" className="hero-img" />
        <div className="hero-text">
          <h1>ROSKILDE 2026</h1>
          <p>Orange Feeling</p>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="container">
        <h2>Spilleplan</h2>
        
        {/* Vis loader, fejlbesked eller data */}
        {loading && <p>Henter musikken...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}

        {!loading && !error && (
          <div className="schedule-grid">
            {/* Vi mapper igennem de dage vi fandt i databasen */}
            {Object.keys(schedule).length > 0 ? (
              Object.entries(schedule).map(([dag, acts]) => (
                <div key={dag} className="day-card">
                  <h3>{dag}</h3>
                  <table className="simple-table">
                    <tbody>
                      {acts.map((act, i) => (
                        <tr key={i}>
                          <td style={{width: '60px'}}>{act.tid}</td>
                          <td><strong>{act.navn}</strong></td>
                          <td style={{color: '#666', fontSize: '0.9em'}}>{act.scene}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <p>Ingen kunstnere fundet i databasen endnu.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}