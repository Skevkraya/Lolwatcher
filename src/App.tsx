import React, { useEffect, useState } from 'react';
import { getCurrentUser, logout } from './api/mockApi';
import type { User } from './api/mockApi';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

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
          <span>Connecté en tant que {user.displayName}</span>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      </header>
      <main className="app-main">
        <Dashboard user={user} onLogout={handleLogout} />
      </main>
    </div>
  );
};

export default App;
