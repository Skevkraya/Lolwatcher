import { Router } from "express";
import { prisma } from "../prisma";



const router = Router();

// GET user settings
router.get("/settings", async (req, res) => {
  try {
    const userId = 1;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        email: true,
        phone: true,
      },
    });

    res.json(user || {});
  } catch (e) {
    console.error("Erreur GET /user/settings", e);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// UPDATE settings
router.put("/settings", async (req, res) => {
  try {
    const userId = 1; // 

    const { email, phone } = req.body;

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { email, phone },
    });

    res.json(updated);
  } catch (e) {
    console.error("Erreur PUT /user/settings", e);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
