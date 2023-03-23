import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import MoodIcon from "./MoodIcon";
import StandardCard from "../StandardCard";
import SubHeading from "../Typography/SubHeading";
import ParagraphLg from "../Typography/ParagraphLg";
import IconBtn from "../Button/IconBtn";
import StandardBtn from "../Button/StandardBtn";

export default function MoodSelect({ moods, moodRecord }) {
  const selectedMood = moodRecord.mood;

  const badMood = ["Sad", "Awful"];

  // can be a separate json to share between Meditions and Moods
  const meditations = [
    {
      meditation: "meditation1",
      meditationImg:
        "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      suitableMood: ["Happy", "Good", "OK"],
    },
    {
      meditation: "meditation2",
      meditationImg:
        "https://images.unsplash.com/photo-1602144564887-e2be90e0ab11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      suitableMood: ["Neutral", "Sad", "Awful"],
    },
    {
      meditation: "meditation3",
      meditationImg:
        "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      suitableMood: ["Neutral", "OK"],
    },
  ];

  const SelectedMoodIcon = moods.find(
    (mood) => mood.description === selectedMood
  ).icon;

  const matchingMeditation = meditations.filter((meditation) =>
    meditation.suitableMood.includes(selectedMood)
  )[0];

  return (
    <PageContainer>
      <SubHeading text={`You are feeling ${selectedMood}`} />
      <MoodIcon>
        <SelectedMoodIcon
          edge='center'
          color='inherit'
          sx={{ width: "6.4rem", height: "6.4rem", borderRadius: "50%" }}
        />
      </MoodIcon>
      <Stack>
        {badMood.includes(selectedMood) && (
          <Box sx={{ textAlign: "center" }}>
            <ParagraphLg text={"Sorry, you feel that way."} />
          </Box>
        )}
        <Box sx={{ margin: "1.2rem auto" }}>
          <ParagraphLg
            text={`We recommed following meditation${
              matchingMeditation > 1 ? "s" : ""
            } for you to try:`}
          />
        </Box>
        <Box sx={{ marginTop: "1.2rem" }}>
          {matchingMeditation && (
            <StandardCard
              key={matchingMeditation.meditation}
              height={"300rem"}
              classCss={"stnCard"}
              imglink={matchingMeditation.meditationImg}
              title={matchingMeditation.meditation}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2.4rem",
          }}>
          <Link to='/'>
            <IconBtn />
          </Link>
          <Link to='/activity-log'>
            <StandardBtn name={"Activity"} />
          </Link>
        </Box>
      </Stack>
    </PageContainer>
  );
}
