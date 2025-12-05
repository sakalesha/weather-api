import axios from "axios";
import cache from "../utils/cache.js";
import { cityCoordinates } from "../utils/cityData.js";

export const getWeatherData = async (city) => {
  city = city.toLowerCase();

  if (!cityCoordinates[city]) {
    throw new Error("Invalid city. Try Bangalore, Mumbai, Delhi, Chennai");
  }

  // check cache
  const cached = cache.get(city);
  if (cached) return cached;

  const { lat, lon } = cityCoordinates[city];

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  const response = await axios.get(url);
  const data = response.data.current_weather;

  const result = {
    city,
    temperature: data.temperature + "°C",
    wind_speed: data.windspeed + " km/h",
    condition_code: data.weathercode,
    updated_at: data.time
  };

  cache.set(city, result);
  return result;
};
