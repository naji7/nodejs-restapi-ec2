import express from "express";
import dotenv from "dotenv";
import healthRoutes from "./routes/health.routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use("/api", healthRoutes);

export default app;
