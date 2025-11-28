import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true, // si tu utilises des cookies ou tokens
  })
);

app.use(express.json());

// Routes
import authRoutes from "./routes/auth";
import accountRoutes from "./routes/accounts";
import matchRoutes from "./routes/matches";
import userRoutes from "./routes/user";

app.use("/auth", authRoutes);
app.use("/accounts", accountRoutes);
app.use("/matches", matchRoutes);
app.use("/user", userRoutes);

app.get("/health", (_, res) => res.status(200).json({ status: "ok" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`API running on http://localhost:${PORT}`)
);

