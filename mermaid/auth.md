
``` mermaid
sequenceDiagram
    participant U as User (React)
    participant A as API (Java/Backend)
    participant D as Database

    Note over U, D: 1. AUTHENTICATION (Login)
    U->>A: POST /login (username, password)
    A->>D: Validate Credentials
    D-->>A: OK
    A->>A: 🗝️ Generer & Signer JWT (med Secret)
    A-->>U: Returner JWT Token
    
    Note left of U: Gemmer Token<br/>(localStorage/sessionStorage)

    Note over U, D: 2. AUTHORIZATION (Hent Data)
    U->>A: GET /api/favorites<br/>Header: "Bearer [JWT]"
    A->>A: 🔍 Verificer Token Signatur
    A->>D: Hent data for denne bruger
    D-->>A: Data
    A-->>U: Returner JSON Data


```