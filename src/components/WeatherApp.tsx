import {
  Box,
  Button,
  CircularProgress,
  Container,
  Input,
  InputAdornment,
  Stack,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { TodayWeather } from "../@types/todayWeather";
import TodayOverview from "./TodayOverview";
import useTodayWeather from "../hooks/useTodayWeather";
import useForecastWeather from "../hooks/useForecastWeather";
import { ForecastWeather } from "../@types/forecastWeather";
import NextDaysWeather from "./NextDaysWeather";

const WeatherApp = () => {
  const [cityName, setCityName] = useState<string>("");
  const theme = useTheme();

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

  const handleSearch = async () => {
    if (!cityName) return;
    getTodayCurrentWeather(cityName);
    getCurrentForecast(cityName);
  };

  return (
    <Container disableGutters maxWidth="lg">
      <Stack flexDirection="row" gap={4} marginBottom={4} marginTop={4}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.tertiary,
            color: theme.palette.primary.text,
            padding: 2,
            borderRadius: 2,
          }}
        >
          weather
        </Box>
        <Input
          id="cityName"
          value={cityName}
          onChange={handleCityChange}
          placeholder="Enter city"
          startAdornment={
            <InputAdornment position="start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </InputAdornment>
          }
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{ border: "1px solid #fff", borderRadius: 2 }}
        >
          Search
        </Button>
      </Stack>
      {currentWeather &&
        (isLoading || isForecastLoading ? (
          <CircularProgress />
        ) : (
          <>
            <TodayOverview
              currentWeather={currentWeather}
              currentForecastWeather={currentForecastWeather}
            />
            <NextDaysWeather currentForecastWeather={currentForecastWeather} />
          </>
        ))}
    </Container>
  );
};

export default WeatherApp;
