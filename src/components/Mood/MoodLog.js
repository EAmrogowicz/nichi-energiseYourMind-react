import {
  Box,
  Grid,
  // Stack
} from "@mui/material";
import MoodGrid from "./MoodGrid";
import Heading5 from "../Typography/Heading5";
import { moods } from "../Mood/Moods";
import ParagraphLg from "../Typography/ParagraphLg";

export default function MoodLogs() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodlog = userData.mood;

  const allMoods = moodlog.reduce((acc, curr) => {
    acc[curr.mood] = (acc[curr.mood] || 0) + 1;
    return acc;
  }, {});

  const mostOccurringMood = Object.entries(allMoods).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  const MostOccuringMoodIcon = moods.find(
    (mood) => mood.description === mostOccurringMood
  ).icon;

  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={3}>
          <MoodGrid icon={MostOccuringMoodIcon} iconboxsize={20} />
        </Grid>
        <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Heading5 text={"Most Occurring Mood"} />
            <ParagraphLg text={mostOccurringMood} />
          </Box>
        </Grid>
      </Grid>
      <Box>
        {moodlog
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .map((moodRecord) => {
            const matchingMood = moods.find(
              (mood) => mood.description === moodRecord.mood
            );
            const MoodIconRecord = matchingMood?.icon || null;
            return (
              <MoodGrid
                key={moodRecord.time}
                icon={MoodIconRecord}
                desc={matchingMood?.description || null}
                time={new Date(moodRecord.time).toLocaleString("en-GB", {
                  dateStyle: "short",
                  timeStyle: "short",
                  timeZone: "Europe/London",
                })}
                iconboxsize={20}
                iconsize={"2rem"}
              />
            );
          })}
      </Box>
    </>
  );
}
