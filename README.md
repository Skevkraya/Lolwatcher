LolWatcher – Application de veille d’activité League of Legends

LolWatcher est une application full-stack permettant de surveiller l’activité de joueurs League of Legends.
L’utilisateur enregistre une liste de comptes Riot, et l’application détecte automatiquement les nouvelles parties jouées, puis envoie des alertes par email ou SMS.

- Fonctionnalités principales


- Gestion compte utilisateur

Création de compte

Connexion / déconnexion (JWT)

Vérification email

Gestion profil (nom d’affichage, fuseau horaire)



- Suivi de comptes LoL

Ajouter / supprimer des pseudos Riot

Stockage des comptes suivis en base

Limite selon abonnement

Validation automatique via Riot API



- Détection d’activité Riot

Polling régulier de l’API RiotGames

Détection des nouvelles parties

Récupération des participants & stats

Historique complet des games



- Notifications

Alertes email

Alertes SMS

Fenêtre silencieuse configurable

Throttling + statut des messages



- Dashboard

Liste des games récentes

Statistiques Co-Play (teammates récurrents)

Filtres par file, région, résultat

Timeline de l’activité



- "Abonnement" Stripe

Plan gratuit : limité

Plan payant : jusqu’à 10 comptes suivis

Webhooks Stripe pour mise à jour automatique



- Architecture technique
Frontend : React + TypeScript + Vite
Backend  : Node.js + Express
ORM      : Prisma
BDD      : MySQL
API ext. : Riot Games API
Notif    : Fournisseur Email + Fournisseur SMS
Paiement : Stripe Checkout + Webhooks



- Structure du projet
Lolwatcher/
│
├── backend/
│   ├── prisma/            -> schéma Prisma + migrations
│   ├── src/
│   │   ├── routes/        -> routes API (auth, accounts, matches…)
│   │   ├── services/      -> logique métier (riot, notif, stripe…)
│   │   ├── models/        -> modèles Prisma
│   │   └── index.ts       -> serveur Express
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/           -> appels API
│   │   ├── components/    -> UI React
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│
└── docs/
    └── uml/               -> tous les diagrammes UML (.png + .plantuml)



- Installation & Lancement
1. Cloner le repository
git clone https://github.com/votreUser/Lolwatcher.git
cd Lolwatcher



- Backend
Installer les dépendances
cd backend
npm install

Configurer l'environnement

Créer un fichier .env :

DATABASE_URL="mysql://user:password@localhost:3306/lolwatcher"
RIOT_API_KEY="..."
JWT_SECRET="..."
EMAIL_API_KEY="..."
SMS_API_KEY="..."
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."

Lancer la base & migrations Prisma
npx prisma migrate dev

Démarrer le serveur
npm run dev



- Frontend
cd frontend
npm install
npm run dev

L’application tourne alors sur :
👉 http://localhost:5173


- Documentation UML

Tous les diagrammes UML sont dans :
📁 docs/uml/

Contient :

Diagramme de cas d’utilisation

Diagramme de classes

Diagrammes de séquence (7+)

Diagrammes d’objets

Architecture technique


- Tests

(Optionnel mais recommandé)
Décrit ici vos tests unitaires ou e2e s'il y en a.


- Déploiement

Une configuration Docker ou un workflow GitHub Actions peut être ajouté pour automatiser le déploiement.


- Roadmap

App mobile

Analyse avancée du gameplay

Notifications Discord / Telegram

Machine learning de prédiction


- Contact

Projet LOLWATCHER UML – 2025
Développé par : Augustin  DESOMBRE, Pierre CERVI, Terry PASSAVE
