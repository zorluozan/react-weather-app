import { Theme } from "@mui/material/styles";

export default function Input(theme: Theme) {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: "#fff",
          padding: "10px",
          "&::before": {
            borderBottom: "none",
          },
          width: "100%",
          border: "1px solid #fff",
          borderRadius: "12px",
        },
      },
    },
  };
}
