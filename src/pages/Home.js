import { Box, Stack } from "@mui/material";
import StandardBtn from "../components/general/StandardBtn";
import Title from "../components/general/Typography/Title";
import SubHeading from "../components/general/Typography/Sub-heading";
import Logo from "../components/Logo/Logo";

export default function Home() {
  return (
    <div className='hero'>
      <Stack
        direction='column'
        justifyContent='space-around'
        alignItems='center'
        spacing={1}
        height={"80vh"}>
        <Box>
          <Title text='Nichi' classCss='h1' />
          <SubHeading text='Energise your Mind' classCss='h4' />
        </Box>
        <Logo />

        <StandardBtn name='Get Started' classCss='btnPill' link='/user-login' />
      </Stack>
    </div>
  );
}
