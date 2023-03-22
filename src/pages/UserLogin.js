import { Box, TextField } from "@mui/material";
import StandardBtn from "../components/general/StandardBtn";
import PageContainer from "../components/general/PageContainer";
import SubHeading from "../components/general/Typography/SubHeading";

export default function UserLogin() {
  return (
    <PageContainer>
      <Box>
        <SubHeading text={"Hello, stranger!"} />
        <SubHeading text={"What is your name?"} />
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
    </PageContainer>
  );
}
