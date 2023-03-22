import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Title({ classCss, text }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" className={classCss}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
