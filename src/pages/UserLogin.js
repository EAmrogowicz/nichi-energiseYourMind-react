import { Box, TextField, Container, Stack } from "@mui/material";
import BtnRound from "../components/general/button/BtnRound";

export default function UserLogin() {
  return (
    <Container
      maxWidth='sm'
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Stack
        direction='column'
        justifyContent='space-around'
        alignItems='center'
        spacing={1}
        height={"100vh"}>
        <Box>
          <h2>Hello, stranger!</h2>
          <h3>What is your name?</h3>
        </Box>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          validate='true'
          autoComplete='off'>
          <TextField id='name' label='name' variant='outlined' />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <BtnRound link={"/"} name={"<-"} />
          <BtnRound name={"Login"} />
        </Box>
      </Stack>
    </Container>
  );
}
