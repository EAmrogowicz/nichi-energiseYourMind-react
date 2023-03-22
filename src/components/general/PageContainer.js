import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size }) {
  return (
    <Container
      maxWidth={size ? size : "md"}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Stack
        direction='column'
        justifyContent='space-around'
        alignItems='center'
        spacing={1}
        height={"75vh"}>
        {children}
      </Stack>
    </Container>
  );
}
