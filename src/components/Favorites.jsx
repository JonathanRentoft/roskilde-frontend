import { useState, useEffect } from 'react';
import facade from '../utils/apiFacade';

export default function Favorites({ user }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      facade.getFavorites().then(data => setFavorites(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    facade.removeFavorite(id).then(() => {
      setFavorites(favorites.filter(f => f.id !== id));
    });
  };

  if (!user) return <div className="container"><p>Log ind for at se dine favoritter.</p></div>;

  return (
    <div className="container">
      <h2>Dine Favoritter</h2>
      
      {favorites.length === 0 ? (
        <p>Du har ingen favoritter endnu.</p>
      ) : (
        <table className="simple-table">
          <thead>
            <tr>
              <th>Tid</th>
              <th>Navn</th>
              <th>Scene</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {favorites.map(fav => (
              <tr key={fav.id}>
                <td>{fav.time || "TBA"}</td>
                <td><strong>{fav.name}</strong></td>
                <td>{fav.stage}</td>
                <td style={{textAlign: 'right'}}>
                  <button 
                    onClick={() => handleDelete(fav.id)}
                  >
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}