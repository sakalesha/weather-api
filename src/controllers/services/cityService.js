import { cityCoordinates } from "../../routes/utils/cityData.js";

export const searchCities = (keyword) => {
  keyword = keyword.toLowerCase();
  
  return Object.keys(cityCoordinates).filter(city =>
    city.startsWith(keyword)
  );
};
