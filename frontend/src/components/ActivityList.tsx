import React from 'react';

interface Match {
  id: number;
  champion: string;
  kills: number;
  deaths: number;
  assists: number;
  playedAt: string;
  result: string;
}

interface Props {
  matches: Match[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleString();
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
            <strong>{m.champion}</strong>
          </div>

          <div>
            Début : {formatDate(m.playedAt)}  
          </div>

          <div>
            KDA : {m.kills} / {m.deaths} / {m.assists}
          </div>

          <div>
            Résultat :{" "}
            <span
              className={
                m.result === "VICTOIRE"
                  ? "badge badge-green"
                  : "badge badge-red"
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
