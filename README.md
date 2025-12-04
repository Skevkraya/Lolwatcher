# 👁️‍🗨️ LOLWATCHER
### *Application de veille d’activité League of Legends*  


```                                                                                                                      
                   :                                                                                                    
                  t#,                                                               .,                     ,;           
             i   ;##W.             i                                               ,Wt .    .            f#i j.         
            LE  :#L:WE            LE             ;                .. GEEEEEEEL    i#D. Di   Dt         .E#t  EW,        
           L#E .KG  ,#D          L#E           .DL               ;W, ,;;L#K;;.   f#f   E#i  E#i       i#W,   E##j       
          G#W. EE    ;#f        G#W.   f.     :K#L     LWL      j##,    t#E    .D#i    E#t  E#t      L#D.    E###D.     
         D#K. f#.     t#i      D#K.    EW:   ;W##L   .E#f      G###,    t#E   :KW,     E#t  E#t    :K#Wfff;  E#jG#W;    
        E#K.  :#G     GK      E#K.     E#t  t#KE#L  ,W#;     :E####,    t#E   t#f      E########f. i##WLLLLt E#t t##f   
      .E#E.    ;#L   LW.    .E#E.      E#t f#D.L#L t#K:     ;W#DG##,    t#E    ;#G     E#j..K#j...  .E#L     E#t  :K#E: 
     .K#E       t#f f#:    .K#E        E#jG#f  L#LL#G      j###DW##,    t#E     :KE.   E#t  E#t       f#E:   E#KDDDD###i
    .K#D         f#D#;    .K#D         E###;   L###j      G##i,,G##,    t#E      .DW:  E#t  E#t        ,WW;  E#f,t#Wi,,,
   .W#G           G#t    .W#G          E#K:    L#W;     :K#K:   L##,    t#E        L#, f#t  f#t         .D#; E#t  ;#W:  
  :W##########Wt   t    :W##########Wt EG      LE.     ;##D.    L##,     fE         jt  ii   ii           tt DWi   ,KK: 
  :,,,,,,,,,,,,,.       :,,,,,,,,,,,,,.;       ;@      ,,,      .,,       :                                             
                                                                                                                                                                                                                
```                                                                                           
                                                                                           
Vérifier dans le .env que la clé API est encore valide 
Il faut la générer ici  : https://developer.riotgames.com/ 
(Un compte Riot est nécessaire)
                                                          
<div align="center">

![Status](https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Backend-Express%20%2B%20Prisma-3C873A?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/Database-MySQL-00618A?style=for-the-badge&logo=mysql)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?style=for-the-badge&logo=stripe)
![Riot](https://img.shields.io/badge/API-Riot%20Games-C8102E?style=for-the-badge&logo=riotgames)

</div>




## | Présentation du projet

**LolWatcher** est une application web permettant de surveiller en temps réel l’activité de joueurs **League of Legends** grâce à l’API Riot Games.

Elle détecte :
- le début d’une partie  
- la fin d’une partie  
- les statistiques match par match  
- les partenaires les plus récurrents  

Et envoie **des alertes e-mail et/ou SMS** selon les préférences de l’utilisateur.

Le projet inclut :
- une stack complète (React + Node + Prisma + MySQL)
- une modélisation UML avancée
- un système d’abonnement Stripe (Free / Premium)
- un poller automatique interrogeant l’API Riot




# | Objectifs

- Ajouter plusieurs comptes LoL à surveiller  
- Détecter automatiquement les nouvelles parties  
- Envoyer des alertes (mail/SMS) dès qu’un événement est détecté  
- Proposer un tableau de bord d’activité  
- Gérer les abonnements (Stripe) et limites d’utilisation  
- Proposer une interface claire (React + Tailwind)




# | Fonctionnalités principales

## | Utilisateur
- Création de compte + vérification e-mail  
- Connexion sécurisée (JWT)  
- Gestion du profil (email, fuseau horaire, pseudo affiché)  
- Paramètres d’alertes (email, SMS, fenêtre silencieuse)  


## | Comptes LoL suivis
- CRUD complet sur les comptes suivis  
- Validation RiotID  
- Historique des matchs  
- CoPlay (joueurs fréquents)  
- Top statistiques des derniers matchs  


## | Notifications
- Envoi automatique email / SMS  
- Respect de la fenêtre silencieuse  
- Journalisation  
- Gestion des échecs d’envoi  


## | Abonnements Stripe

| Plan | Comptes suivis | SMS Alerts | Prix |
|------|----------------|------------|------|
|  Free | 3 | NON | 0€ |
|  Premium | 10 | OUI | abonnement |




# | Stack technique
```
Frontend : React + Vite + Tailwind + TypeScript
Backend : Node.js + Express
ORM : Prisma
Database : MySQL
Services : Stripe, SMTP, SMS Provider
API : Riot Developer API (Summoner, Match-V5)
```



# | Structure du projet
```
/backend
├─ prisma/
├─ src/
│ ├─ models/
│ ├─ routes/
│ ├─ services/
│ ├─ index.ts
└─ package.json

/frontend
├─ src/
│ ├─ api/
│ ├─ components/
│ ├─ App.tsx
│ ├─ main.tsx
└─ index.html
```



# | UML (dans /uml)
```
- Diagrammes de cas d'utilisation  
- Diagramme de classes (détaillé)  
- Diagrammes de séquence :  
  - Inscription  
  - Connexion  
  - Ajout d’un compte LoL  
  - Polling Riot API  
  - Notification SMS/Email  
  - Abonnement Stripe  
  - Tableau de bord  
- Diagrammes d’objets  
```



# | Installation et lancement

## 1) Cloner
```bash
git clone https://github.com/Skevkraya/Lolwatcher.git
cd Lolwatcher

2) Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

Créer un fichier .env :
DATABASE_URL=mysql://...
RIOT_API_KEY=...
STRIPE_SECRET_KEY=...
SMTP_HOST=...
SMS_PROVIDER_KEY=...

3) Frontend


cd frontend
npm install
npm run dev
➡ http://localhost:5173/
```

 | Auteur
Augustin DESOMBRE, Pierre CERVI, Terry PASSAVE
