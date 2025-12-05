import express from "express";
import cors from "cors";
import { apiLimiter } from "./middleware/rateLimit.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { logger } from "./middleware/logger.js";

import weatherRoutes from "./routes/weatherRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
    preflightContinue: false,
  })
);

// Fallback CORS header (covers edge cases on Render)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// Logging + Rate Limiting
app.use(logger);
app.use(apiLimiter);

// Routes
app.use("/weather", weatherRoutes);
app.use("/city", cityRoutes);

// Error Handler
app.use(errorHandler);

export default app;
