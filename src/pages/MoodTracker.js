import { Container } from "@mui/system";

export default function MoodTracker() {
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div>
        <h2>Mood page</h2>
      </div>
    </Container>
  );
}
