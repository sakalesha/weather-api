import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const cityCoordinates = {
  bangalore: { lat: 12.9716, lon: 77.5946 },
  mumbai: { lat: 19.0760, lon: 72.8777 },
  delhi: { lat: 28.7041, lon: 77.1025 },
  chennai: { lat: 13.0827, lon: 80.2707 }
};

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city?.toLowerCase();

    if (!cityCoordinates[city]) {
      return res.status(400).json({
        error: "Invalid city. Try: Bangalore, Mumbai, Delhi, Chennai"
      });
    }

    const { lat, lon } = cityCoordinates[city];

    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const response = await axios.get(weatherURL);

    res.json({
      city,
      temperature: response.data.current_weather.temperature + "°C",
      wind_speed: response.data.current_weather.windspeed + " km/h",
      condition: response.data.current_weather.weathercode,
      updated_at: response.data.current_weather.time
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => console.log("API running on port 3000"));
