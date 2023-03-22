import { Box } from "@mui/material";
import LinkBtn from "../components/general/Button/LinkBtn";
import Logo from "../components/Logo/Logo";
import PageContainer from "../components/general/PageContainer";
import Title from "../components/general/Typography/Title";
import SubHeading from "../components/general/Typography/SubHeading";

export default function Home() {
  return (
    <div className='hero' style={{ textAlign: "center" }}>
      <PageContainer size='false'>
        <Box>
          <Title text={"Nichi"} />
          <SubHeading text={"Energise Your Mind"} />
        </Box>
        <Logo />
        <LinkBtn name='Get Started' classCss='btnPill' link='/user-login' />
      </PageContainer>
    </div>
  );
}
