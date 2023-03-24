import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size, mg }) {
  // const header = document.querySelector("nav").getBoundingClientRect().height;

  return (
    <Container
      maxWidth={size ? size : "md"}
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "4.8rem auto 4.8rem auto",
      }}
    >
      {children}
    </Container>
  );
}
