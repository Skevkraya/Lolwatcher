import React, { useEffect, useState } from 'react';
import { getTrackedAccounts, getRecentMatches } from '../api/api';
import type { TrackedAccount, MatchSummary } from '../api/mockApi';
import type { User } from '../api/mockApi';
import { TrackedAccountsList } from './TrackedAccountsList';
import { ActivityList } from './ActivityList';
import { AddAccountForm } from "./AddAccountForm";

type DashboardProps = {
  user: User;
  onLogout: () => void;
};

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [accounts, setAccounts] = useState<TrackedAccount[]>([]);
  const [matches, setMatches] = useState<MatchSummary[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const [acc, m] = await Promise.all([
        getTrackedAccounts(),
        getRecentMatches(),
      ]);
      setAccounts(acc);
      setMatches(m);
    } catch (err) {
      console.error("Erreur Dashboard :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Chargement du tableau de bord...</div>;
  }

  const filteredMatches = selectedAccountId
    ? matches.filter(m => Number(m.accountId) === selectedAccountId)
    : matches;

  return (
    <div className="dashboard-layout">

      {/* COLONNE GAUCHE */}
      <div className="dashboard-left">
        <section>
          <h2>Ajouter un compte LoL</h2>
          <AddAccountForm
            userId={Number(user.id)}
            onAdded={loadData}
          />
        </section>

        <section>
          <h2>Comptes suivis</h2>
          <TrackedAccountsList
            accounts={accounts}
            onSelect={setSelectedAccountId}
            selectedId={selectedAccountId}
            onDeleted={loadData}      
          />
        </section>
      </div>

      {/* COLONNE DROITE */}
      <div className="dashboard-right">
        <section>
          <h2>Activité récente</h2>
          <ActivityList matches={filteredMatches} />
        </section>
      </div>

    </div>
  );
};
