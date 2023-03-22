import { Container } from "@mui/material";

export default function PageContainer({ children }) {
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {children}
    </Container>
  );
}
