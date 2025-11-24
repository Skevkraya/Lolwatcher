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
  const [loading, setLoading] = useState(true);

  /** Fonction qui recharge toutes les données */
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

  /** Chargement initial */
  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div>Chargement du tableau de bord...</div>;
  }

  return (
    <div className="dashboard-layout">
      
      {/* SECTION AJOUT COMPTE LOL */}
      <section>
        <h2>Ajouter un compte LoL</h2>
        <AddAccountForm
          userId={Number(user.id)}          // maintenant correct !
          onAdded={loadData}        // recharge après ajout
        />
      </section>

      {/* SECTION COMPTES SUIVIS */}
      <section>
        <h2>Comptes suivis</h2>
        <TrackedAccountsList accounts={accounts} />
      </section>

      {/* SECTION MATCHS */}
      <section>
        <h2>Activité récente</h2>
        <ActivityList matches={matches} />
      </section>
    </div>
  );
};
