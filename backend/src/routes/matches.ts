import { Router } from "express";
import { prisma } from "../prisma";

const router = Router();

router.get("/", async (_req, res) => {
  const matches = await prisma.match.findMany({
    orderBy: { playedAt: "desc" },
  });

  res.json(matches);
});

export default router;
