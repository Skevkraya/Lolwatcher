// src/api/mockApi.ts
export interface User {
  id: string;
  email: string;
  displayName: string;
}

export interface TrackedAccount {
  id: string;
  riotGameName: string;
  riotTag: string;
  region: string;
  active: boolean;
}

export interface MatchSummary {
  id: string;
  trackedAccountId: string;
  riotGameName: string;
  queueType: string;
  startedAt: string;
  durationMinutes: number;
  result: 'VICTOIRE' | 'DEFAITE';
}

let currentUser: User | null = null;

export async function login(email: string, password: string): Promise<User> {
  // Mock tout simple : on accepte n’importe quoi si non vide
  if (!email || !password) {
    throw new Error('E-mail et mot de passe obligatoires');
  }

  currentUser = {
    id: 'user-1',
    email,
    displayName: email.split('@')[0] || 'Utilisateur',
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(currentUser as User), 400);
  });
}

export async function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(currentUser), 200);
  });
}

export async function logout(): Promise<void> {
  currentUser = null;
}

export async function getTrackedAccounts(): Promise<TrackedAccount[]> {
  // Données de démo
  const data: TrackedAccount[] = [
    {
      id: 'acc-1',
      riotGameName: 'TopLaner',
      riotTag: 'EUW',
      region: 'EUW',
      active: true,
    },
    {
      id: 'acc-2',
      riotGameName: 'JungleKing',
      riotTag: 'EUW',
      region: 'EUW',
      active: true,
    },
    {
      id: 'acc-3',
      riotGameName: 'SmurfADC',
      riotTag: 'EUW',
      region: 'EUW',
      active: false,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 400);
  });
}

export async function getRecentMatches(): Promise<MatchSummary[]> {
  const data: MatchSummary[] = [
    {
      id: 'match-1',
      trackedAccountId: 'acc-1',
      riotGameName: 'TopLaner',
      queueType: 'RANKED_SOLO',
      startedAt: '2025-11-24T18:30:00Z',
      durationMinutes: 32,
      result: 'VICTOIRE',
    },
    {
      id: 'match-2',
      trackedAccountId: 'acc-2',
      riotGameName: 'JungleKing',
      queueType: 'RANKED_FLEX',
      startedAt: '2025-11-24T17:05:00Z',
      durationMinutes: 28,
      result: 'DEFAITE',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 400);
  });
}
