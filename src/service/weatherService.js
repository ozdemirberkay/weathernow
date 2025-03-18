import { getData } from "./webService";

const WEATHER_BASE_URL = "http://api.weatherapi.com";
const API_KEY = "API_KEY";

export const getWeatherFromName = async ({ query }) => {
  const result = await getData({
    baseUrl: WEATHER_BASE_URL,
    url: "v1/current.json",
    params: {
      key: API_KEY,
      q: query,
    },
  });

  return result;
};
