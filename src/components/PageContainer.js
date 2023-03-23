import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size, mg }) {
  // const header = document.querySelector("nav").getBoundingClientRect().height;

  return (
    <Container
      maxWidth={size ? size : "md"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "2.4rem auto 6.4rem auto",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={1}
        minHeight={"75vh"}
      >
        {children}
      </Stack>
    </Container>
  );
}
