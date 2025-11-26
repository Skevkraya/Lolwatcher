import { Router } from "express";
import { prisma } from "../prisma";
import { getSummonerByName, getMatchIds, getMatch } from "../services/riot";

const router = Router();

/* Récupérer tous les comptes suivis du user */
router.get("/", async (req, res) => {
  try {
    const accounts = await prisma.trackedAccount.findMany({
      include: {
        matches: true
      }
    });

    res.json(accounts);
  } catch (error) {
    console.error("Erreur GET /accounts :", error);
    res.status(500).json({ error: "Erreur serveur lors de la récupération des comptes." });
  }
});

/** Ajouter un compte LoL */
router.post("/", async (req, res) => {
  const { gameName, tagLine, region, userId } = req.body;

  try {
    // Trouver le joueur via Riot API
    const account = await getSummonerByName(gameName, tagLine);

    // Récupérer les matchs du joueur
    const matchIds = await getMatchIds(account.puuid, region);

    // Sauver le compte dans la DB
    const saved = await prisma.trackedAccount.create({
      data: {
        gameName,
        tagLine,
        region,
        puuid: account.puuid,
        userId,
      }
    });

    // Sauver les matchs
    for (const matchId of matchIds) {
      const m = await getMatch(matchId, region);

      const participant = m.info.participants.find(
        (p: any) => p.puuid === account.puuid
      );

      await prisma.match.create({
        data: {
          champion: participant.championName,
          kills: participant.kills,
          deaths: participant.deaths,
          assists: participant.assists,
          playedAt: new Date(m.info.gameStartTimestamp),
          result: participant.win ? "VICTOIRE" : "DEFAITE",
          accountId: saved.id,
        }
      });
    }

    res.json(saved);

  } catch (e) {
    console.error("Erreur POST /accounts :", e);
    res.status(500).json({ error: "Impossible de récupérer les données Riot" });
  }
});

/* Supprimer un compte suivi */
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    // 1️⃣ Supprimer d'abord les matchs liés
    await prisma.match.deleteMany({
      where: { accountId: id }
    });

    // 2️⃣ Supprimer ensuite le compte
    await prisma.trackedAccount.delete({
      where: { id }
    });

    res.json({ success: true });

  } catch (e) {
    console.error("Erreur DELETE /accounts/:id :", e);
    res.status(500).json({ error: "Impossible de supprimer ce compte" });
  }
});

router.put("/:id/alerts", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { enabled } = req.body;

    const updated = await prisma.trackedAccount.update({
      where: { id },
      data: {
        alertsEnabled: !!enabled
      }
    });

    res.json(updated);

  } catch (e) {
    console.error("Erreur PUT /accounts/:id/alerts :", e);
    res.status(500).json({ error: "Impossible de modifier l'état des alertes." });
  }
});


export default router;
