import { Box } from "@mui/material";

export default function CardWrapper({ children }) {
  return <Box sx={{ width: "100%", margin: "auto" }}>{children}</Box>;
}
