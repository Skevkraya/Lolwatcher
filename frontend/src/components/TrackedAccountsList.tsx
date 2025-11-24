import React from 'react';

interface Props {
  accounts: any[];
  onSelect: (id: number) => void;
  selectedId: number | null;
}

export const TrackedAccountsList: React.FC<Props> = ({ accounts, onSelect, selectedId }) => {
  if (!accounts.length) {
    return <p>Aucun compte suivi pour le moment.</p>;
  }

  return (
    <ul className="list">
      {accounts.map((acc) => (
        <li
          key={acc.id}
          className={`list-item clickable ${selectedId === acc.id ? "selected" : ""}`}
          onClick={() => onSelect(acc.id)}
        >
          <div>
            <strong>
              {acc.gameName}#{acc.tagLine}
            </strong>{" "}
            ({acc.region})
          </div>
        </li>
      ))}
    </ul>
  );
};
