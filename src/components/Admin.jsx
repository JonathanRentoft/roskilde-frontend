import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import facade from "../utils/apiFacade";

export default function Admin() {
  const emptyForm = { name: "", day: "", time: "", stage: "", genre: "", description: "" };
  
  const [artists, setArtists] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const updateList = () => {
    facade.getArtists().then((data) => setArtists(data));
  };

  useEffect(() => {
    updateList();
  }, []);

  const handleChange = (e) => { //laver nyt objekt ud af de gamle felter fra formdata og overskriver det ændrede felt
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      const bodyToSend = { ...formData, id: editId };
      
      facade.updateArtist(editId, bodyToSend)
        .then(() => {
          updateList();
          resetForm();
          alert("Artist updated successfully!");
        })
        .catch((err) => {
          console.error(err);
          alert("Fejl ved opdatering.");
        });
    } else {
      facade.createArtist(formData)
        .then(() => {
          updateList();
          resetForm();
          alert("New artist created!");
        })
        .catch((err) => {
          console.error(err);
          alert("Fejl ved oprettelse. Tjek konsollen.");
        });
    }
  };

  const handleEdit = (artist) => {
    setIsEditing(true);
    setEditId(artist.id);
    setFormData({
      name: artist.name,
      day: artist.day,
      time: artist.time || "",
      stage: artist.stage,
      genre: artist.genre || "",
      description: artist.description || ""
    });
    window.scrollTo(0, 0); // Scroller op til formen hvor man ændrer
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this artist?")) {
      facade.deleteArtist(id)
        .then(() => updateList())
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData(emptyForm);
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <div style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <p>Admin Tools:</p>
        <Link to="details">Vis Detaljer (Sub-route demo)</Link>
        <br />
      
        <Outlet />
      </div>


      <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <h3>{isEditing ? "Edit Artist" : "Add New Artist"}</h3>
        
        <form onSubmit={handleSubmit} className="admin-form">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            <input id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input id="stage" placeholder="Stage" value={formData.stage} onChange={handleChange} required />
            <input id="day" placeholder="Day (e.g. Wednesday)" value={formData.day} onChange={handleChange} required />
            <input id="time" placeholder="Time (e.g. 22:00)" value={formData.time} onChange={handleChange} required />
            <input id="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
          </div>
          <textarea 
            id="description" 
            placeholder="Description..." 
            value={formData.description} 
            onChange={handleChange}
            style={{width: '100%', marginTop: '10px', height: '60px'}}
          />

          <div style={{marginTop: '15px'}}>
            <button type="submit" style={{ backgroundColor: "green", color: "white", marginRight: "10px" }}>
              {isEditing ? "Update Artist" : "Create Artist"}
            </button>
            
            {isEditing && (
              <button type="button" onClick={resetForm} style={{ backgroundColor: "gray", color: "white" }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <h3>All Artists</h3>
      <table className="simple-table">
        <thead>
          <tr style={{textAlign: 'left'}}>
            <th>Time</th>
            <th>Name</th>
            <th>Day</th>
            <th>Stage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => (
            <tr key={artist.id}>
              <td>{artist.time}</td>
              <td>{artist.name}</td>
              <td>{artist.day}</td>
              <td>{artist.stage}</td>
              <td>
                <button onClick={() => handleEdit(artist)} style={{ marginRight: "5px" }}>Edit</button>
                <button onClick={() => handleDelete(artist.id)} style={{ backgroundColor: "red", color: "white" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}