import express from "express";
import { autocompleteCity } from "../controllers/cityController.js";

const router = express.Router();
router.get("/search", autocompleteCity);

export default router;
