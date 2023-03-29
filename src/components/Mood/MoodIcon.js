import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function MoodIcon({ children, ...props }) {
  const iconboxsize = props.iconboxsize ?? 100;
  const padding = props.padding ?? "1rem";
  return (
    <Grid
      container
      md={2}
      sm={4}
      xs={6}
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: padding,
      }}
      {...props}>
      <Box
        sx={{
          width: iconboxsize,
          height: iconboxsize,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {children}
      </Box>
    </Grid>
  );
}
