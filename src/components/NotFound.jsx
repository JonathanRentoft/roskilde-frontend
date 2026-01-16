import { Link } from "react-router-dom"; 

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Hovsa!</h1>
      <p>Vi kunne desværre ikke finde den side, du leder efter.</p>
      
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Gå tilbage til forsiden
        </button>
      </Link>
    </div>
  );
}

