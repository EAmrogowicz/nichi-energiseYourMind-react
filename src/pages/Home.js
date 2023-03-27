import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import StandardBtn from "../components/Button/StandardBtn";
import Logo from "../components/Logo";
import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";
// import MotionItem from "../components/Motion/MotionItem";
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
        <div className='hero'>
          <PageContainer>
            <MotionPage>
              <Box sx={{ mt: "2.4rem" }}>
                <PageTitle text='Nichi' />
                <SubHeading
                  text='Energise Your Mind'
                  classCss={"fontWeight100"}
                />
              </Box>

              <Logo />

              <Link to='/user-login'>
                <StandardBtn name='Get Started' />
              </Link>
            </MotionPage>
          </PageContainer>
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
