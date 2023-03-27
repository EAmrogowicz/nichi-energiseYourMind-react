import { Box, Stack } from "@mui/material";
import MoodIcon from "./MoodIcon";
import Heading5 from "../Typography/Heading5";
import { moods } from "../Mood/Moods";
import ParagraphLg from "../Typography/ParagraphLg";

export default function MoodMost() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodlog = userData.mood;

  const allMoods = moodlog.reduce((acc, curr) => {
    acc[curr.description] = (acc[curr.description] || 0) + 1;
    return acc;
  }, {});

  const mostOccurringMood = Object.entries(allMoods).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  const MostOccuringMoodIcon = moods.find(
    (mood) => mood.description === mostOccurringMood
  ).icon;

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "0 1.2rem",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <MoodIcon>
          <MostOccuringMoodIcon
            edge='center'
            color='inherit'
            sx={{
              width: "4rem",
              height: "4rem",
            }}
          />
        </MoodIcon>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <ParagraphLg text={"Your usual mood"} />
        <Heading5 text={mostOccurringMood} />
      </Box>
    </Stack>
  );
}
