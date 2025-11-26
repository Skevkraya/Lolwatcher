import React from 'react';
import { updateAccountAlerts } from "../api/api";


interface Props {
  accounts: any[];
  onSelect: (id: number) => void;
  selectedId: number | null;
  onDeleted?: () => void; // pour refresh après suppression
}

export const TrackedAccountsList: React.FC<Props> = ({ accounts, onSelect, selectedId, onDeleted }) => {
  if (!accounts.length) {
    return <p>Aucun compte suivi pour le moment.</p>;
  }

  return (
    <ul className="list">
      {accounts.map((acc) => (
        <li
          key={acc.id}
          className={`list-item clickable ${selectedId === acc.id ? "selected" : ""}`}
        >
          {/* Zone cliquable pour sélectionner */}
          <div
            className="flex-1"
            onClick={() => onSelect(acc.id)}
            style={{ cursor: "pointer" }}
          >
            <strong>
              {acc.gameName}#{acc.tagLine}
            </strong>{" "}
            ({acc.region})
          </div>

          {/* Switch alertes */}
          <label className="switch ml-3">
            <input
              type="checkbox"
              checked={acc.alertsEnabled}
              onChange={async () => {
                const updated = await updateAccountAlerts(acc.id, !acc.alertsEnabled);
                onDeleted && onDeleted(); // refresh
              }}
            />
            <span className="slider round"></span>
          </label>

          {/* Bouton supprimer */}
          <button
            onClick={async (e) => {
              e.stopPropagation(); 

              if (!confirm("Supprimer ce joueur suivi ?")) return;

              const res = await fetch(`http://localhost:3001/accounts/${acc.id}`, {
                method: "DELETE",
              });

              if (res.ok) {
                onDeleted && onDeleted();
              } else {
                alert("Impossible de supprimer ce compte.");
              }
            }}
            className="ml-3 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
