import { Box } from "@mui/material";
import LinkBtn from "../components/General/Button/LinkBtn";
import Logo from "../components/Logo/Logo";
import PageContainer from "../components/General/PageContainer";
import Title from "../components/General/Typography/Title";
import SubHeading from "../components/General/Typography/SubHeading";
import Dashboard from "./Dashboard";

export default function Home() {
  // redirects and rerender isn't perfect when deleting user from Application tab
  const userData =
    localStorage.getItem("userData") !== null
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

  return (
    <>
      {!userData ? (
        <div className="hero" style={{ textAlign: "center" }}>
          <PageContainer size="false">
            <Box>
              <Title text={"Nichi"} />
              <SubHeading text={"Energise Your Mind"} />
            </Box>
            <Logo />
            <LinkBtn name="Get Started" classCss="btnPill" link="/user-login" />
          </PageContainer>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
