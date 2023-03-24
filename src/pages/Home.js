import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import StandardBtn from "../components/Button/StandardBtn";
import Logo from "../components/Logo";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/Typography/Title";
import SubHeading from "../components/Typography/SubHeading";
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
              <PageTitle text="Nichi" />
              <SubHeading
                text="Energise Your Mind"
                classCss={"fontWeight100"}
              />
            </Box>
            <Box>
              <Logo />
            </Box>

            <br />
            <br />
            <Link to="/user-login">
              <StandardBtn name="Get Started" />
            </Link>
          </PageContainer>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
