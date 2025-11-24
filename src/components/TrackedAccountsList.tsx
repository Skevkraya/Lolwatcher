import React from 'react';
import type { TrackedAccount } from '../api/mockApi';

interface Props {
  accounts: TrackedAccount[];
}

export const TrackedAccountsList: React.FC<Props> = ({ accounts }) => {
  if (!accounts.length) {
    return <p>Aucun compte suivi pour le moment.</p>;
  }

  return (
    <ul className="list">
      {accounts.map((acc) => (
        <li key={acc.id} className="list-item">
          <div>
            <strong>
              {acc.riotGameName}#{acc.riotTag}
            </strong>{' '}
            ({acc.region})
          </div>
          <div>
            Statut :{' '}
            <span className={acc.active ? 'badge badge-green' : 'badge'}>
              {acc.active ? 'Actif' : 'Inactif'}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};