import axios from "axios";
import { BASE_URL, API_KEY } from "../config";

export const getTodayWeather = async (cityName: string) => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  return response?.data;
};

export const getForecastData = async (cityName: string) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
  );
  return response?.data?.list;
};
