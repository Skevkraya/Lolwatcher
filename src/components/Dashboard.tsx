import type { User } from "../api/mockApi";

type DashboardProps = {
  user: User;
  onLogout: () => void;
};

export const Dashboard = ({ user, onLogout }: DashboardProps) => {
  return (
    <div>
      <h2>Bienvenue, {user.username}</h2>
      <button onClick={() => onLogout()}>Se déconnecter</button>
    </div>
  );
};
