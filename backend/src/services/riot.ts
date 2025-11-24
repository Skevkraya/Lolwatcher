import axios from "axios";

const API_KEY = process.env.RIOT_API_KEY;

function riotRequest(url: string) {
  return axios.get(url, {
    headers: { "X-Riot-Token": API_KEY }
  });
}

/* Trouver un joueur */
export async function getSummonerByName(gameName: string, tagLine: string) {
  const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
  const res = await riotRequest(url);
  return res.data; // { puuid, gameName, tagLine }
}

/* Obtenir la liste des matchs */
export async function getMatchIds(puuid: string, region: string) {
  const routing = {
    euw1: "europe",
    eun1: "europe",
    tr1: "europe",
    ru: "europe",

    na1: "americas",
    br1: "americas",
    la1: "americas",
    la2: "americas",

    kr: "asia",
    jp1: "asia",
  }[region.toLowerCase()];

  const url = `https://${routing}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=10`;
  const res = await riotRequest(url);
  return res.data; // ["EUW1_12345", "EUW1_12346", ...]
}

/* Récupérer un match complet */
export async function getMatch(matchId: string, region: string) {
  const routing = {
    euw1: "europe",
    eun1: "europe",
    tr1: "europe",
    ru: "europe",
    na1: "americas",
    br1: "americas",
    la1: "americas",
    la2: "americas",
    kr: "asia",
    jp1: "asia",
  }[region.toLowerCase()];

  const url = `https://${routing}.api.riotgames.com/lol/match/v5/matches/${matchId}`;
  const res = await riotRequest(url);
  return res.data;
}
