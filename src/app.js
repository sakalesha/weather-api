import express from "express";
import cors from "cors";
import { apiLimiter } from "./middleware/rateLimit.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { logger } from "./middleware/logger.js";

import weatherRoutes from "./routes/weatherRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";

const app = express();
app.use(cors());
app.use(logger);
app.use(apiLimiter);

app.use("/weather", weatherRoutes);
app.use("/city", cityRoutes);

app.use(errorHandler);

export default app;
