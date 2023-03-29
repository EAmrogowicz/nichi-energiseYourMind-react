import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ParagraphSm({ classCss, text }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" className={classCss} sx={{ mb: "1.2rem" }}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
