import { searchCities } from "./services/cityService.js";

export const autocompleteCity = (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) throw new Error("Search query required");

    const matches = searchCities(q);
    res.json({ success: true, results: matches });
  } catch (err) {
    next(err);
  }
};
