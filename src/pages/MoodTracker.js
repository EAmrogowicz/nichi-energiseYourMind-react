import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import PageContainer from "../components/PageContainer";
import MoodIcon from "../components/MoodIcon";
import StandardBtn from "../components/Button/StandardBtn";
import MoodBtn from "../components/Button/MoodBtn";
import SubHeading from "../components/Typography/SubHeading";

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState("");
  const navigate = useNavigate();
  const timeStamp = new Date().toISOString();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodRecord = {
    time: timeStamp,
    mood: selectedMood,
  };

  function handleMoodSubmit() {
    const existingMoodData = userData.mood || [];
    const updatedMoodData = [...existingMoodData, moodRecord];
    userData.mood = updatedMoodData;
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/activity-log");
  }

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

      <Grid
        container
        spacing={{ xs: 8, sm: 8, md: 12 }}
        columns={{ xs: 6, sm: 3, md: 12 }}
      >
        {moods.map((mood) => {
          return (
            <MoodIcon
              key={mood.description}
              onClick={() => setSelectedMood(mood.description)}
            >
              <MoodBtn
                className={selectedMood === mood.description ? "selected" : ""}
              >
                <mood.icon
                  edge="center"
                  color="inherit"
                  sx={{ width: "3rem", height: "3rem" }}
                />
              </MoodBtn>
              <Typography variant="p" sx={{ mt: 1, mb: 8 }}>
                {mood.description}
              </Typography>
            </MoodIcon>
          );
        })}
      </Grid>

      <StandardBtn name={"Submit"} onClick={handleMoodSubmit} />
    </PageContainer>
  );
}
