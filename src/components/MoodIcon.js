import { Box, Grid } from "@mui/material";

export default function MoodIcon({ children }) {
  return (
    <Grid
      item
      sm={1}
      xs={3}
      sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      <Box
        sx={{
          width: 75,
          height: 75,
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
