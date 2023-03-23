import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function SubHeading({ classCss, text }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" className={classCss}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
