import { useState, useEffect } from 'react';
import facade from '../utils/apiFacade';
import concertImage from '../assets/roskilde-scene.jpeg';

export default function Home() {
  const [schedule, setSchedule] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    facade.getArtists().then((data) => {
      const sortedSchedule = {};

      data.forEach((artist) => {
        const day = artist.day || "Other Days";

        if (sortedSchedule[day] === undefined) {
          sortedSchedule[day] = [];
        }

        sortedSchedule[day].push(artist);
      });

      setSchedule(sortedSchedule);
    });

    if (facade.loggedIn()) {
      facade.getFavorites().then((data) => {
        const idList = data.map((fav) => fav.id);
        setFavorites(idList);
      });
    }

  }, []);

  const handleStarClick = (id) => {
    if (facade.loggedIn() === false) {
      alert("You must be logged in to save favorites!");
      return; 
    }

    const isFavorite = favorites.includes(id);

    if (isFavorite === true) {
      facade.removeFavorite(id).then(() => {
        const newList = favorites.filter((favId) => favId !== id);
        setFavorites(newList);
      });
    } else {
      facade.addFavorite(id).then(() => {
        const newList = [...favorites, id]; 
        setFavorites(newList);
      });
    }
  };

  return (
    <div>
      <div className="hero-section">
        <img src={concertImage} className="hero-img" alt="Hero" />
        <div className="hero-text">
          <h1>ROSKILDE 2026</h1>
        </div>
      </div>

      <div className="container">
        
        <div className="schedule-grid">
          
          {Object.keys(schedule).map((dayName) => {
            const artistsOnDay = schedule[dayName];

            return (
              <div key={dayName} className="day-card">
                <h3>{dayName}</h3>
                
                <table className="simple-table">
                  <tbody>
                    {artistsOnDay.map((artist) => {
                      const isFav = favorites.includes(artist.id);

                      return (
                        <tr key={artist.id}>
                          <td>{artist.time || "TBA"}</td>
                          <td><strong>{artist.name}</strong></td>
                          <td>{artist.stage}</td>
                          
                          <td 
                            onClick={() => handleStarClick(artist.id)}
                            style={{ cursor: 'pointer', fontSize: '1.5em' }}
                          >
                            <span style={{ color: isFav ? 'gold' : '#ccc' }}>
                              {isFav ? "★" : "☆"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}