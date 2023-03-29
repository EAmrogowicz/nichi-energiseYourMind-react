import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size }) {
  // const header = document.querySelector("nav").getBoundingClientRect().height;
  return (
    <Container
      maxWidth={size ?? ""}
      fixed
      // marginTop={{ xs: "2.4rem", sm: "2.4rem", md: "9.6rem" }}
      sx={{
        width: "100%",
        minHeight: "84vh",
        marginTop: { xs: "1.6rem", md: "4.8rem" },
        marginBottom: { xs: "2.4rem", md: "3.2rem" },
        // margin: "3.2rem auto 2.4rem auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 4, sm: 4, md: 8 }}
      >
        {children}
      </Stack>
    </Container>
  );
}
