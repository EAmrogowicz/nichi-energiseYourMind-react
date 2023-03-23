import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Heading5({ classCss, text }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5" className={classCss}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
