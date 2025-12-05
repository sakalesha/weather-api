import { getWeatherData } from "../services/weatherService.js";

export const getWeather = async (req, res, next) => {
  try {
    const { city } = req.query;
    if (!city) throw new Error("City parameter is required");

    const data = await getWeatherData(city);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
