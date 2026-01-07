⛺ Roskilde Festival App (Frontend)
Velkommen til frontenden af mit eksamensprojekt! Det her er "ansigtet" udadtil, hvor brugere kan se musikere, logge ind og gemme deres favoritter. 🎸

Appen er bygget med React og Vite, så den er lynhurtig (og nem at crashe, hvis man piller for meget 😉).

(Husk at tage et screenshot af din side og lægge det her!)

🚀 Tech Stack (Det jeg har brugt)
React (Fordi komponenter er nice)

Vite (Fordi Create-React-App er langsomt)

JavaScript (Motoren bag det hele)

React Router (Til at skifte side uden at reloade)

DigitalOcean (Hvor den lever i skyen)

📦 Sådan kører du den lokalt
Hvis du vil lege med koden på din egen maskine:

Hent projektet:

Bash

git clone https://github.com/jonathan0912000/roskilde-frontend.git
cd roskilde-frontend
Installer pakkerne (node_modules):

Bash

npm install
Start appen:

Bash

npm run dev
Åbn http://localhost:5173 i din browser. Boom! 💥

⚙️ Konfiguration
Appen snakker med min Backend API. Hvis du kører lokalt, eller hvis API'et flytter adresse, skal du rette én linje i filen:

📂 src/utils/apiFacade.js

JavaScript

// Til produktion (Live):
const URL = "https://api.insidertrades.io";

// Til lokal udvikling (hvis du kører backend lokalt):
// const URL = "http://localhost:7071";
🌍 Live Version
Projektet er deployet og lever lige nu her: 👉 https://insidertrades.io

(Hvis siden er nede, så har jeg nok glemt at betale regningen til DigitalOcean eller crashet serveren igen...)

✅ Features (Hvad virker?)
[x] Se liste over Artister

[x] Login (Bruger / Admin)

[x] Se "Mine Favoritter" (Kræver login)

[x] Admin kan slette/rette ting (måske...)

[ ] Flottere design (Kommer i v2.0)

🐛 Kendte fejl
Hvis API'et sover, viser siden ingenting (men console logger en fejl!).

Designet er "minimalistisk" (læs: jeg er ikke designer).

Lavet af Jonathan - Eksamensprojekt 2026
