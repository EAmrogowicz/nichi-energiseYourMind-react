import { Box, Grid } from "@mui/material";

export default function MeditationIcon({ children, ...props }) {
  const iconboxsize = props.iconboxsize ?? 100;
  const padding = props.padding ?? "1rem";
  return (
    <Grid
      item
      md={1}
      sm={2}
      xs={3}
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
