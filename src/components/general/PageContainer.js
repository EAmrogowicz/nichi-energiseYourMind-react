import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size }) {
  // const header = document.querySelector("nav").getBoundingClientRect().height;

  return (
    <Container
      maxWidth={size ? size : "md"}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem auto",
        // marginTop: `${header}px`,
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
