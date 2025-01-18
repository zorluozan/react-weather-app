import { Button, Stack, Typography, useTheme } from "@mui/material";
import { ForecastWeather } from "../@types/forecastWeather";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import ForecastWeatherCard from "./ForecastWeatherCard";

type Props = {
  currentForecastWeather: ForecastWeather[];
};

const NextDaysWeather = ({ currentForecastWeather }: Props) => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState("All Days");

  const uniqueDates = Array.from(
    new Set(
      currentForecastWeather?.map((item) =>
        dayjs(item.dt * 1000).format("D MMM ddd")
      )
    )
  );

  const filteredWeather = currentForecastWeather?.filter(
    (item: ForecastWeather) =>
      selectedDate === dayjs(item.dt * 1000).format("D MMM ddd")
  );

  return (
    currentForecastWeather?.length > 0 && (
      <Stack gap={2}>
        <Typography variant="body1">Next 5 days</Typography>
        <Stack flexDirection="row" alignItems="center" gap={2}>
          {["All Days", ...uniqueDates].map((item, index) => {
            return (
              <Button
                key={index}
                sx={{
                  backgroundColor:
                    selectedDate === item
                      ? theme.palette.primary.text
                      : theme.palette.primary.tertiary,
                  color:
                    selectedDate === item
                      ? theme.palette.primary.tertiary
                      : theme.palette.primary.text,
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  setSelectedDate(item);
                }}
              >
                {item}
              </Button>
            );
          })}
        </Stack>
        <Grid container spacing={2}>
          {(selectedDate === "All Days"
            ? currentForecastWeather
            : filteredWeather
          )?.map((item: ForecastWeather, index: number) => {
            return <ForecastWeatherCard item={item} key={index} />;
          })}
        </Grid>
      </Stack>
    )
  );
};

export default NextDaysWeather;
