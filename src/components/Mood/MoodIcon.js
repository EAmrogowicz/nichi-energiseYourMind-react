import { Box, Grid } from "@mui/material";

export default function MoodIcon({ children, ...props }) {
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
        padding: "3.2rem",
      }}
      {...props}>
      <Box
        sx={{
          width: 100,
          height: 100,
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
