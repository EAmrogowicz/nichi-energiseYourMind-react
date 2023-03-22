import { Grid, Typography } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import PageContainer from "../components/general/PageContainer";
import MoodIcon from "../components/MoodIcon";
import StandardBtn from "../components/general/Button/StandardBtn";
import SubHeading from "../components/general/Typography/SubHeading";

export default function MoodTracker() {
  const moods = [
    { icon: SentimentVerySatisfiedOutlinedIcon, description: "Happy" },
    { icon: SentimentSatisfiedAltOutlinedIcon, description: "Good" },
    { icon: SentimentSatisfiedIcon, description: "OK" },
    { icon: SentimentNeutralOutlinedIcon, description: "Neutral" },
    { icon: SentimentDissatisfiedOutlinedIcon, description: "Sad" },
    { icon: SentimentVeryDissatisfiedOutlinedIcon, description: "Awful" },
  ];
  return (
    <PageContainer>
      <SubHeading text={"How are you feeling today?"} />
      <Grid container spacing={2} columns={6}>
        {moods.map((mood) => {
          return (
            <MoodIcon key={mood.description}>
              <mood.icon
                edge='center'
                color='inherit'
                sx={{ width: "3rem", height: "3rem" }}
              />
              <Typography variant='p'>{mood.description}</Typography>
            </MoodIcon>
          );
        })}
      </Grid>
      <StandardBtn name={"Submit"} />
    </PageContainer>
  );
}
