import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";
import MotionItem from "../components/Motion/MotionItem";
import SubHeading from "../components/Typography/SubHeading";
import Heading4 from "../components/Typography/Heading4";
import StandardCard from "../components/StandardCard";

export default function Dashboard() {
  //
  //
  const username = JSON.parse(localStorage.getItem("userData")).username;
  const navigate = useNavigate();

  if (localStorage.getItem("userData") === null) {
    navigate("/user-login");
  }
  return (
    <MotionPage>
      <PageContainer>
        <Box>
          <SubHeading text={`Hi, ${username}!`} />
          <Heading4 text={"Explore your meditations"} />
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={4}>
            <StandardCard
              address={"/meditation"}
              height={"300rem"}
              classCss={"stnCard"}
              classCssIn={"stnCard-text"}
              imglink={
                "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
              }
              title={"Meditate"}
              caption={
                "Catch your breath, relax your mind and reclaim your serenity."
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StandardCard
              address={"/mood-tracker"}
              height={"300rem"}
              classCss={"stnCard"}
              classCssIn={"stnCard-text"}
              imglink={
                "https://images.unsplash.com/photo-1602144564887-e2be90e0ab11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              }
              title={"Mood Board"}
              caption={
                "Discover the mood in your head and make good days your new normal. "
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StandardCard
              address={"/activity-log"}
              height={"300rem"}
              classCss={"stnCard"}
              classCssIn={"stnCard-text"}
              imglink={
                "https://images.unsplash.com/photo-1531816247963-c7b28072d65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              }
              title={"Activity"}
              caption={
                "See your activity - do it for yourself, and everyone you love."
              }
            />
          </Grid>
        </Grid>
      </PageContainer>
    </MotionPage>
  );
}
