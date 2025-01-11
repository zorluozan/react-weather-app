import { Box, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid2";
import { ForecastWeather } from "../@types/forecastWeather";

type Props = {
  item: ForecastWeather;
};

const ForecastWeatherCard = ({ item }: Props) => {
  const theme = useTheme();
  return (
    <Grid
      size={3}
      sx={{
        backgroundColor: theme.palette.primary.tertiary,
        borderRadius: 3,
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.accent,
          }}
        >
          {dayjs(item?.dt * 1000).format("D MMM ddd")}{" "}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.primary.text }}>
          {dayjs(item?.dt * 1000).format("HH:mm")}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img
          src={`/assets/${item?.weather?.[0]?.icon}.svg`}
          alt={item?.weather?.[0]?.description ?? ""}
          style={{ width: "48px", height: "48px" }}
        />
        <Box>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.primary.text }}
          >
            {Math.round(item?.main?.temp * 10) / 10} °C
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.primary.accent }}
          >
            {item?.weather?.[0]?.description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ForecastWeatherCard;
