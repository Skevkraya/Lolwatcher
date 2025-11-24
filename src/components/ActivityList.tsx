import React from 'react';
import type { MatchSummary } from '../api/mockApi';

interface Props {
  matches: MatchSummary[];
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString();
}

export const ActivityList: React.FC<Props> = ({ matches }) => {
  if (!matches.length) {
    return <p>Aucune partie récente détectée.</p>;
  }

  return (
    <ul className="list">
      {matches.map((m) => (
        <li key={m.id} className="list-item">
          <div>
            <strong>{m.riotGameName}</strong> – {m.queueType}
          </div>
          <div>
            Début : {formatDate(m.startedAt)} – Durée ~ {m.durationMinutes} min
          </div>
          <div>
            Résultat:{' '}
            <span
              className={
                m.result === 'VICTOIRE'
                  ? 'badge badge-green'
                  : 'badge badge-red'
              }
            >
              {m.result}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};