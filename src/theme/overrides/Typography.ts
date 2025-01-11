import { Theme } from "@mui/material/styles";

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: {
            fontSize: 64,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.primary.title,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 20,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.palette.primary.title,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 16,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.palette.primary.text,
          },
        },
      ],
    },
  };
}
