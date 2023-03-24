import { Container, Stack } from "@mui/material";

export default function PageContainer({ children, size, mg, stackDisable }) {
  // const header = document.querySelector("nav").getBoundingClientRect().height;
  const stack = stackDisable ? false : true;

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
      {stack ? (
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={1}
          minHeight={"60vh"}
        >
          {children}
        </Stack>
      ) : (
        children
      )}
    </Container>
  );
}
