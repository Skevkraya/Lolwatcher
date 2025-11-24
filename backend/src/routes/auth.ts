import { Router } from "express";
import { prisma } from "../prisma";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Identifiants invalides" });
  }

  res.json(user);
});

export default router;
