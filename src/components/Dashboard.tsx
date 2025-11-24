import React, { useEffect, useState } from 'react';
import { getTrackedAccounts, getRecentMatches } from '../api/mockApi';
import type { TrackedAccount, MatchSummary } from '../api/mockApi';
import { TrackedAccountsList } from './TrackedAccountsList';
import { ActivityList } from './ActivityList';

export const Dashboard: React.FC = () => {
  const [accounts, setAccounts] = useState<TrackedAccount[]>([]);
  const [matches, setMatches] = useState<MatchSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [acc, m] = await Promise.all([
        getTrackedAccounts(),
        getRecentMatches(),
      ]);
      setAccounts(acc);
      setMatches(m);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Chargement du tableau de bord...</div>;
  }

  return (
    <div className="dashboard-layout">
      <section>
        <h2>Comptes suivis</h2>
        <TrackedAccountsList accounts={accounts} />
      </section>
      <section>
        <h2>Activité récente</h2>
        <ActivityList matches={matches} />
      </section>
    </div>
  );
};