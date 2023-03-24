import { Box } from "@mui/material";
import LinkBtn from "../components/Button/LinkBtn";
import Logo from "../components/Logo";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/Typography/Title";
import SubHeading from "../components/Typography/SubHeading";
import Dashboard from "./Dashboard";
import Footer from "../components/Footer/Footer";

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
              <PageTitle text="Nichi" />
              <SubHeading
                text="Energise Your Mind"
                classCss={"fontWeight100"}
              />
            </Box>
            <Box>
              <Logo />
            </Box>

            <LinkBtn name="Get Started" link="/user-login" />
          </PageContainer>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
