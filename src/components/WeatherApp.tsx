import { CircularProgress, Container } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { TodayWeather } from "../@types/todayWeather";
import TodayOverview from "./TodayOverview";
import useTodayWeather from "../hooks/useTodayWeather";
import useForecastWeather from "../hooks/useForecastWeather";
import { ForecastWeather } from "../@types/forecastWeather";
import NextDaysWeather from "./NextDaysWeather";
import Header from "./Header";

const WeatherApp = () => {
  const [cityName, setCityName] = useState<string>("");

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const { getTodayCurrentWeather, todayWeatherData, isLoading } =
    useTodayWeather();

  const {
    getCurrentForecast,
    forecastData,
    isLoading: isForecastLoading,
  } = useForecastWeather();

  const currentWeather: TodayWeather = todayWeatherData;
  const currentForecastWeather: ForecastWeather[] = forecastData;

  const handleSearch = () => {
    if (!cityName) return;
    getTodayCurrentWeather(cityName);
    getCurrentForecast(cityName);
    setCityName("");
  };

  return (
    <Container disableGutters maxWidth="lg">
      <Header
        cityName={cityName}
        handleCityChange={handleCityChange}
        onSearch={handleSearch}
      />
      {isLoading || isForecastLoading ? (
        <CircularProgress />
      ) : (
        <>
          <TodayOverview
            currentWeather={currentWeather}
            currentForecastWeather={currentForecastWeather}
          />
          <NextDaysWeather currentForecastWeather={currentForecastWeather} />
        </>
      )}
    </Container>
  );
};

export default WeatherApp;
