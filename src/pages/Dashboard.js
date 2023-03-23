import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import SubHeading from "../components/Typography/SubHeading";
import ActionAreaCard from "../components/Card/ActionAreaCard";

export default function Dashboard() {
  const username = JSON.parse(localStorage.getItem("userData")).username;
  const navigate = useNavigate();

  if (localStorage.getItem("userData") === null) {
    navigate("/user-login");
  }
  return (
    <PageContainer>
      <SubHeading text={`Hi, ${username}!`} />

      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 6, md: 12 }}>
        <Grid xs={6}>
          <ActionAreaCard
            height={"300rem"}
            classCss={"stnCard"}
            imglink={
              "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            }
            title={"Meditate"}
            caption={"lorem lorem"}
          />
        </Grid>
        <Grid xs={6}>
          <ActionAreaCard
            height={"300rem"}
            classCss={"stnCard"}
            imglink={
              "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            }
            title={"Mood Board"}
            caption={"lorem lorem"}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
