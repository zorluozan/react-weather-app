import { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import GlobalStyles from "./globalStyles";
import typography from "./typography";
import palette from "./palette";
import ComponentsOverrides from "./overrides";

type Props = { children: ReactNode };

export default function ThemeProvider({ children }: Props) {
  const themeOptions = {
    palette: palette(),
    typography,
  };

  const theme = createTheme(themeOptions);

  // @ts-ignore
  theme.components = ComponentsOverrides(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MuiThemeProvider>
  );
}
