# ⛺ Roskilde Festival App (Frontend)

Velkommen til frontenden af mit eksamensprojekt! Det her er "ansigtet" udadtil, hvor brugere kan se musikere, logge ind og gemme deres favoritter. 🎸

Appen er bygget med **React** og **Vite**, så den er lynhurtig (og nem at crashe, hvis man piller for meget 😉).

## 🚀 Tech Stack (Det jeg har brugt)
* **React** (Fordi komponenter er nice)
* **Vite** (Fordi Create-React-App er for langsomt)
* **JavaScript** (Motoren bag det hele)
* **React Router** (Til at skifte side uden at reloade)
* **DigitalOcean** (Hvor den lever i skyen)

## 📦 Sådan kører du den lokalt

Hvis du vil lege med koden på din egen maskine:

1.  **Hent projektet:**
    ```bash
    git clone [https://github.com/jonathan0912000/roskilde-frontend.git](https://github.com/jonathan0912000/roskilde-frontend.git)
    cd roskilde-frontend
    ```

2.  **Installer pakkerne (node_modules):**
    ```bash
    npm install
    ```

3.  **Start appen:**
    ```bash
    npm run dev
    ```

4.  Åbn `http://localhost:5173` i din browser. Boom! 💥

## ⚙️ Konfiguration

Appen snakker med min Backend API. Hvis du kører lokalt, eller hvis API'et flytter adresse, skal du rette én linje i filen:

📂 `src/utils/apiFacade.js`

```javascript
// Til produktion (Live):
const URL = "[https://api.insidertrades.io](https://api.insidertrades.io)";

// Til lokal udvikling (hvis du kører backend lokalt):
// const URL = "http://localhost:7071";