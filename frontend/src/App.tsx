import React, { useEffect, useState } from 'react';
import { getCurrentUser, logout } from './api/mockApi';
import type { User } from './api/mockApi';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [page, setPage] = useState<"dashboard" | "settings">("dashboard");

  useEffect(() => {
    (async () => {
      const u = await getCurrentUser();
      setUser(u);
      setLoadingUser(false);
    })();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  if (loadingUser) {
    return <div className="app-centered">Chargement...</div>;
  }

  if (!user) {
    return (
      <div className="app-centered">
        <LoginForm onLoginSuccess={(u) => setUser(u)} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>LoL Activity Watcher</h1>

        <div className="app-header-right">

          {/* 🔥 Bouton pour aller à Settings */}
          <button onClick={() => setPage("settings")}>
            ⚙️ Paramètres
          </button>

          <span>Connecté en tant que {user.displayName}</span>

          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      </header>

      <main className="app-main">

        {page === "dashboard" && (
          <Dashboard
            user={user}
            onLogout={handleLogout}
          />
        )}

        {page === "settings" && (
          <Settings
            onBack={() => setPage("dashboard")}
          />
        )}

      </main>
    </div>
  );
};

export default App;
