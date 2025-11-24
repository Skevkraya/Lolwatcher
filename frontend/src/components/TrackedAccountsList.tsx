import React from 'react';

interface Props {
  accounts: any[]; // TEMPORAIRE : le temps d’ajuster les types
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
              {acc.gameName}#{acc.tagLine}  
            </strong>{' '}
            ({acc.region})
          </div>
          <div>
            Statut :{' '}
            <span className="badge badge-green">
              Actif   
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
