import "dotenv/config";
import cors from "cors";
import express from "express";

import healthRouter from "./routes/health";

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to SE-Project1 API"
  });
});

app.use("/api", healthRouter);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
