export type ColorSchema = "primary";

declare module "@mui/material/styles/createPalette" {
  //   interface TypeBackground {
  //     neutral: string;
  //   }
  interface SimplePaletteColorOptions {
    // link: string;
    title: string;
    text: string;
    tertiary: string;
    accent: string;
    // inputColor: string;
  }
  interface PaletteColor {
    // lighter: string;
    // darker: string;
    // link: string;
    title: string;
    text: string;
    tertiary: string;
    accent: string;
    // inputColor: string;
  }
}

const PRIMARY = {
  title: "#EBEEF5",
  text: "#fff",
  main: "#0f172a",
  tertiary: "#1f293b",
  accent: "#94a3b8",
};

export default function palette() {
  return { primary: PRIMARY };
}
