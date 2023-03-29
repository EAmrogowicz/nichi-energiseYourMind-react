import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function MeditationIcon({ children, ...props }) {
  const iconboxsize = props.iconboxsize ?? 100;
  // const padding = props.padding ?? "1rem";
  return (
    <Grid
      container
      sm={4}
      xs={12}
      spacing={1}
      {...props}
      justifyContent="center"
    >
      <Box
        sx={{
          width: iconboxsize,
          height: iconboxsize,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}
