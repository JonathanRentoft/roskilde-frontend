import { useState } from "react";
import facade from "../utils/apiFacade";

export default function Login({ onLogin }) { //objekt destructuring, vi får onLogin som prop som er en callback funktion
  const [loginCredentials, setLoginCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const performLogin = (evt) => {
    evt.preventDefault(); // Forhindrer at siden genindlæser
    
    facade.login(loginCredentials.username, loginCredentials.password)
      .then((data) => {
        // jeg kalder funktionen i App.jsx
        onLogin(data.username, data.role);  
      })
      .catch((err) => {
        // Login fejl
        setError("Forkert brugernavn eller kodeord");
      });
  };

  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
  };

  return (
    <div className="container">
      <h2>Log Ind</h2>
      <form onSubmit={performLogin}>
        <input placeholder="Brugernavn" id="username" onChange={onChange} />
        <input type="password" placeholder="Kodeord" id="password" onChange={onChange} />
        <button type="submit">Login</button>
      </form>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}