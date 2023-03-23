import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SubHeading from "../components/Typography/SubHeading";
import StandardCard from "../components/StandardCard";

export default function Dashboard() {
  const username = JSON.parse(localStorage.getItem("userData")).username;
  const navigate = useNavigate();

  if (localStorage.getItem("userData") === null) {
    navigate("/user-login");
  }
  return (
    <PageContainer>
      <SubHeading text={`Hi, ${username}!`} />

      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 8 }}
        columns={{ xs: 6, md: 12 }}>
        <Grid item xs={6}>
          <StandardCard
            height={"300rem"}
            classCss={"stnCard"}
            imglink={
              "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            }
            title={"Meditate"}
            caption={"lorem lorem"}
          />
        </Grid>
        <Grid item xs={6}>
          <StandardCard
            height={"300rem"}
            classCss={"stnCard"}
            imglink={
              "https://images.unsplash.com/photo-1602144564887-e2be90e0ab11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            title={"Mood Board"}
            caption={"lorem lorem"}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
