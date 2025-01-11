import { Theme } from "@mui/material/styles";
import Input from "./Input";
import Typography from "./Typography";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    // Link(theme),
    Input(),
    Typography(theme),
    // Card(theme)
    {}
  );
}
