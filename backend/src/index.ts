// lancer backend : npx nodemon src/index.ts
// Prisma studio : npx prisma studio 

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// Routes
import authRoutes from "./routes/auth";
import accountRoutes from "./routes/accounts";
import matchRoutes from "./routes/matches";

app.use("/auth", authRoutes);
app.use("/accounts", accountRoutes);
app.use("/matches", matchRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
