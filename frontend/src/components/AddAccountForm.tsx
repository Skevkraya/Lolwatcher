import React, { useState } from "react";
import { addAccount } from "../api/api";

type Props = {
  userId: number;
  onAdded: () => void; // événement envoyé au Dashboard
};

export const AddAccountForm: React.FC<Props> = ({ userId, onAdded }) => {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [region, setRegion] = useState("EUW1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await addAccount(gameName, tagLine, region, userId);
      setGameName("");
      setTagLine("");
      setRegion("EUW1");
      onAdded(); // recharge les comptes dans le Dashboard
    } catch (err) {
      setError("Impossible d'ajouter ce compte LoL");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="account-form">
      <h3>Ajouter un compte LoL</h3>

      <input
        type="text"
        placeholder="Game Name (ex: Faker)"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="TagLine (ex: KR1)"
        value={tagLine}
        onChange={(e) => setTagLine(e.target.value)}
        required
      />

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="EUW1">EUW</option>
        <option value="EUN1">EUNE</option>
        <option value="NA1">NA</option>
        <option value="KR">KR</option>
        <option value="BR1">BR</option>
        <option value="LA1">LAN</option>
        <option value="LA2">LAS</option>
        <option value="OC1">OCE</option>
        <option value="RU">RU</option>
        <option value="TR1">TR</option>
        <option value="JP1">JP</option>
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Ajout..." : "Ajouter le compte LoL"}
      </button>
    </form>
  );
};
