import { Box } from "@mui/material";
import ParagraphLg from "./Typography/ParagraphLg";
import dayjs from "dayjs";

export default function Streak() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData?.mood;
  const meditationData = userData?.meditation;
  const activityData =
    (moodData != null || meditationData != null) &&
    [moodData ?? [], meditationData ?? []].flat();

  console.log(activityData);

  function getStreak(activityData) {
    const dates = activityData.map((data) => dayjs(data.time).startOf("day"));
    const uniqueDates = [...new Set(dates)];
    const sortedDates = uniqueDates.sort((a, b) => a.diff(b));

    let streak = 0;

    for (let i = 0; i < sortedDates.length; i++) {
      if (i === 0 || sortedDates[i].diff(sortedDates[i - 1], "day") === 1) {
        streak++;
      }
    }

    return streak;
  }

  return (
    <Box
      sx={{
        m: "1.2rem auto",
        textAlign: "center",
        "@media( min-width: 900px)": { my: "2.4rem" },
      }}>
      <ParagraphLg text={`Your streak is`} />
      <Box className='streak-box'>
        <span>{getStreak(activityData)}</span>
      </Box>
      <ParagraphLg text={"days"} />
    </Box>
  );
}
