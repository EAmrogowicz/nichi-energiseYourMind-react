import { Box, Grid, Stack } from "@mui/material";
import PageContainer from "../PageContainer";
import MoodIcon from "./MoodIcon";
import SubHeading from "../Typography/SubHeading";
import Heading5 from "../Typography/Heading5";
import ParagraphLg from "../Typography/ParagraphLg";

export default function MoodLogs({ moods }) {
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
    <PageContainer>
      <SubHeading text={"Thank you for telling us how you feel!"} />
      <Box>
        <Heading5 text={"Most Occurring Mood"} />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={4}>
            <MoodIcon>
              <MostOccuringMoodIcon
                edge='center'
                color='inherit'
                sx={{ width: "3rem", height: "3rem" }}
              />
            </MoodIcon>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
            <Box>
              <ParagraphLg text={mostOccurringMood} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {moodlog
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .map((moodRecord) => {
            const matchingMood = moods.find(
              (mood) => mood.description === moodRecord.mood
            );
            const MoodIconRecord = matchingMood?.icon || null;
            return (
              <Grid container spacing={2} columns={12} key={moodRecord.time}>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <MoodIcon>
                    <MoodIconRecord
                      edge='center'
                      color='inherit'
                      sx={{ width: "3rem", height: "3rem" }}
                    />
                  </MoodIcon>
                </Grid>
                <Grid
                  item
                  xs={8}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Stack>
                    <ParagraphLg text={matchingMood?.description || null} />
                    <ParagraphLg
                      text={new Date(moodRecord.time).toLocaleString("en-GB", {
                        dateStyle: "short",
                        timeStyle: "short",
                        timeZone: "Europe/London",
                      })}
                    />
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
      </Box>
    </PageContainer>
  );
}
