import {
  Stack,
  Box,
  Input,
  InputAdornment,
  Button,
  useTheme,
} from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  cityName: string;
  handleCityChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const Header = ({ cityName, handleCityChange, onSearch }: Props) => {
  const theme = useTheme();

  return (
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
        onClick={onSearch}
        variant="contained"
        sx={{ border: "1px solid #fff", borderRadius: 2 }}
      >
        Search
      </Button>
    </Stack>
  );
};

export default Header;
