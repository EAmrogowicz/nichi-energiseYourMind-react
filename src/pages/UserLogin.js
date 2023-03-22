import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import PageContainer from "../components/general/PageContainer";
import SubHeading from "../components/general/Typography/SubHeading";
import LinkBtn from "../components/general/Button/LinkBtn";
import IconBtn from "../components/general/Button/IconBtn";

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
        <Link to='/'>
          <IconBtn />
        </Link>
        <LinkBtn to='#' name={"Login"} />
      </Box>
    </PageContainer>
  );
}
