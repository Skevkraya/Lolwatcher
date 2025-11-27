🧿 LolWatcher — Application de veille d’activité League of Legends

Projet de fin de module — UML + Développement Full-Stack



📌 Présentation du projet

LolWatcher est une web-app permettant de surveiller l’activité de plusieurs comptes League of Legends.
Dès qu’un joueur suivi commence ou termine une partie, l’application peut envoyer une alerte e-mail et/ou SMS.

Le projet inclut :

une stack complète (front + API + BDD)

une modélisation UML avancée

une intégration de l’API Riot Games (matchs, comptes, région, tags)

un système d’abonnement Stripe pour débloquer plus de fonctionnalités



🎯 Objectifs

Permettre à un utilisateur d’ajouter plusieurs comptes LoL à surveiller

Détecter automatiquement les nouvelles parties (polling Riot API)

Envoyer des alertes (mail/SMS) basées sur ses préférences

Offrir un tableau de bord d’activité complet

Gérer les abonnements et limitations (Free / Premium)



🚀 Fonctionnalités principales
👤 Utilisateur

Création de compte + vérification e-mail

Connexion sécurisée (JWT)

Gestion du profil (email, fuseau horaire, préférences d’alertes)

🎮 Comptes LoL surveillés

Ajout d’un compte par Riot ID (Nom#TAG)

Suppression / mise à jour du suivi

Affichage :

matches récents

statistiques partenaires

fréquence de jeu



🔔 Notifications

Alerte en cas de nouvelle partie détectée

Emails + SMS (selon abonnement)

Fenêtre silencieuse configurable (ex : 23h–7h)



💳 Abonnements (Stripe)

Plan Free : 3 comptes surveillés

Plan Premium : jusqu’à 10 comptes

Gestion automatique via webhooks Stripe



🧩 Architecture générale
Frontend (React + Vite + TypeScript)
    ↳ Authentification
    ↳ Dashboard activité
    ↳ Gestion des comptes suivis

Backend (Node.js + Express + Prisma)
    ↳ Auth API
    ↳ Riot API client
    ↳ Notifications
    ↳ Abonnements Stripe

Base de données : MySQL

Services externes :
    ↳ Riot Games API
    ↳ SMTP (emails)
    ↳ SMS provider
    ↳ Stripe Checkout



🗄️ Modèle de données (Prisma)

Les tables principales (schema.prisma) :

User

TrackedAccount

Match

Participant

Subscription

Notification

Preferences

➡️ Voir le répertoire backend/prisma/.

📂 Structure du projet
Backend
backend/
  prisma/
  src/
    models/
    routes/
    services/
    index.ts

Frontend
frontend/
  public/
  src/
    api/
    components/
    App.tsx



🧪 Diagrammes UML

Tous les diagrammes (cas d’utilisation, classes, séquence, objets) sont disponibles dans le dossier :

/uml


Exemples inclus :

Diagramme de cas d’utilisation complet

Diagrammes de séquence (connexion, abonnement, notification, polling Riot, tableau de bord…)

Diagrammes d’objets

Diagramme de classes final

🔧 Installation & lancement
1) Cloner le projet
git clone https://github.com/Skevkraya/Lolwatcher.git
cd Lolwatcher

2) Lancer le backend
cd backend
npm install
npx prisma migrate dev
npm run dev


Assure-toi d’avoir un .env contenant :

DATABASE_URL="mysql://..."
RIOT_API_KEY="..."
STRIPE_SECRET_KEY="..."
SMTP_HOST="..."

3) Lancer le frontend
cd frontend
npm install
npm run dev


L’application sera accessible sur :
👉 http://localhost:5173/



🧪 Tests (optionnel)
npm run test



🤝 Contributeurs

Projet réalisé par :
Augustin DESOMBRE, Pierre CERVI, Terry PASSAVE
📜 Licence

Projet à usage pédagogique — non destiné à la mise en production commerciale.
