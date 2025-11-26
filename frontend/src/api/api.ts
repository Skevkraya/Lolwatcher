const API_URL = "http://localhost:3001";

import type { TrackedAccount, MatchSummary } from "./types";

export async function getTrackedAccounts(): Promise<TrackedAccount[]> {
  const res = await fetch(`${API_URL}/accounts`);
  return res.json();
}

export async function getRecentMatches(): Promise<MatchSummary[]> {
  const res = await fetch(`${API_URL}/matches`);
  return res.json();
}


export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Identifiants invalides");

  return res.json();
}

// export async function getTrackedAccounts() {
//   const res = await fetch(`${API_URL}/accounts`);
//   return res.json();
// }

// export async function getRecentMatches() {
//   const res = await fetch(`${API_URL}/matches`);
//   return res.json();
// }

export async function addAccount(gameName: string, tagLine: string, region: string, userId: number) {
  const res = await fetch("http://localhost:3001/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gameName, tagLine, region, userId }),
  });

  if (!res.ok) {
    throw new Error("Erreur lors de l'ajout du compte LoL.");
  }

  return res.json();
}
export async function getUserSettings() {
  const res = await fetch("http://localhost:3001/user/settings");
  return res.json();
}

export async function updateUserSettings(settings) {
  const res = await fetch("http://localhost:3001/user/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(settings)
  });

  if (!res.ok) throw new Error("Erreur settings");
  return res.json();
}

export async function updateAccountAlerts(id: number, enabled: boolean) {
  const res = await fetch(`http://localhost:3001/accounts/${id}/alerts`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enabled })
  });

  return res.json();
}