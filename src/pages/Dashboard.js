import Container from "@mui/material/Container";

export default function Dashboard() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2>Dashboard</h2>
      </div>
    </Container>
  );
}
