import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  imageUrl: string;
  title: string;
  value: string;
};

const TodayWeatherDetailCard = ({ imageUrl, title, value }: Props) => {
  const theme = useTheme();
  const cardStyles = {
    backgroundColor: theme.palette.primary.tertiary,
    borderRadius: "8px",
    padding: 2,
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    flexBasis: "35%",
    gap: 1,
  };

  return (
    <Box sx={cardStyles}>
      <img
        src={`/assets/${imageUrl}`}
        alt={`${title} Icon`}
        style={{ width: "48px", height: "48px" }}
      />
      <Box>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.primary.accent }}
        >
          {title}
        </Typography>
        <Typography variant="body1">{value}</Typography>
      </Box>
    </Box>
  );
};

export default TodayWeatherDetailCard;
