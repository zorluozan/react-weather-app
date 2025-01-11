import { useMutation } from "@tanstack/react-query";
import { getForecastData } from "../services/weatherService";

const useForecastWeather = () => {
  const {
    mutate: getCurrentForecast,
    data: forecastData,
    isLoading,
  } = useMutation({
    mutationFn: getForecastData,
  });

  return { getCurrentForecast, forecastData, isLoading };
};

export default useForecastWeather;
