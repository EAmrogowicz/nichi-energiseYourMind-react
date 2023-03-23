import { Box, Typography, Grid, Stack } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import PageContainer from "../components/general/PageContainer";
import MoodIcon from "../components/MoodIcon";
import SubHeading from "../components/general/Typography/SubHeading";

export default function MoodLogs() {
  const moods = [
    { icon: SentimentVerySatisfiedOutlinedIcon, description: "Happy" },
    { icon: SentimentSatisfiedAltOutlinedIcon, description: "Good" },
    { icon: SentimentSatisfiedIcon, description: "OK" },
    { icon: SentimentNeutralOutlinedIcon, description: "Neutral" },
    { icon: SentimentDissatisfiedOutlinedIcon, description: "Sad" },
    { icon: SentimentVeryDissatisfiedOutlinedIcon, description: "Awful" },
  ];

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
        <Typography variant='h6'>Most Occurring Mood</Typography>
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
              <Typography variant='p'>{mostOccurringMood}</Typography>
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
                    <Typography variant='p'>
                      {matchingMood?.description || null}
                    </Typography>
                    <Typography variant='p'>
                      {new Date(moodRecord.time).toLocaleString("en-GB", {
                        dateStyle: "short",
                        timeStyle: "short",
                        timeZone: "Europe/London",
                      })}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
      </Box>
    </PageContainer>
  );
}
