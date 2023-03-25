import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size }) {
  // const header = document.querySelector("nav").getBoundingClientRect().height;
  return (
    <Container
      maxWidth={size ?? ""}
      fixed
      sx={{
        width: "100%",
        minHeight: "100vh",
        margin: "4.8rem auto 2.4rem auto",
        display: "flex",
        justifyContent: "center",
      }}>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={{ xs: 4, sm: 6, md: 8 }}>
        {children}
      </Stack>
    </Container>
  );
}
