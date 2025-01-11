import { useMutation } from "@tanstack/react-query";
import { getTodayWeather } from "../services/weatherService";

const useTodayWeather = () => {
  const {
    mutate: getTodayCurrentWeather,
    data: todayWeatherData,
    isLoading,
  } = useMutation({
    mutationFn: getTodayWeather,
  });

  return { getTodayCurrentWeather, todayWeatherData, isLoading };
};

export default useTodayWeather;
