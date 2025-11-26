import React, { useEffect, useState } from "react";
import { getUserSettings, updateUserSettings } from "../api/api";

interface Props {
  onBack: () => void;
}

export const Settings: React.FC<Props> = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserSettings().then((data) => {
      setEmail(data.email || "");
      setPhone(data.phone || "");
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    await updateUserSettings({ email, phone });
    alert("Paramètres enregistrés !");
    onBack();
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="settings-container">
      <h2>Paramètres du compte</h2>

      <label>Email :</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Téléphone :</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleSave} className="btn-primary mt-4">
        💾 Enregistrer
      </button>

      <button onClick={onBack} className="btn-secondary mt-2">
        ⬅️ Retour
      </button>
    </div>
  );
};
