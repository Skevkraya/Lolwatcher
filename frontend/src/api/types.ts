export type TrackedAccount = {
  id: number;
  gameName: string;
  tagLine: string;
  region: string;
  puuid: string;
  userId: number;
};

export type MatchSummary = {
  id: number;
  champion: string;
  kills: number;
  deaths: number;
  assists: number;
  playedAt: string;
  result: "VICTOIRE" | "DEFAITE";
  accountId: number;
};
