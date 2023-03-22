import { Box, TextField, Stack } from "@mui/material";
import StandardBtn from "../components/general/StandardBtn";
import PageContainer from "../components/general/PageContainer";

export default function UserLogin() {
  return (
    <PageContainer>
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
          <StandardBtn link={"/"} name={"<-"} />
          <StandardBtn name={"Login"} />
        </Box>
      </Stack>
    </PageContainer>
  );
}
