import express from "express";
import cors from "cors";
import { apiLimiter } from "./middleware/rateLimit.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { logger } from "./middleware/logger.js";

import weatherRoutes from "./routes/weatherRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";

const app = express();

// ✅ EXPRESS 5 SAFE CORS FIX (No app.options)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Fallback (Render proxy)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  next();
});

// Logger & rate limiter
app.use(logger);
app.use(apiLimiter);

// Routes
app.use("/weather", weatherRoutes);
app.use("/city", cityRoutes);

// Error handler
app.use(errorHandler);

export default app;
