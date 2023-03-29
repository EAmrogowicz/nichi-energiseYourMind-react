import { Box } from "@mui/material";
import ParagraphLg from "./Typography/ParagraphLg";
import dayjs from "dayjs";

export default function Streak() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData?.mood;
  const meditationData = userData?.meditation;
  // flatten conditionally all data. I don't really know it wants so many checks for null, but can't argue with rendered
  const activityData =
    (moodData != null || meditationData != null) &&
    [moodData ?? [], meditationData ?? []].flat();

  function getStreak(activityData) {
    const dates = activityData.map((data) => dayjs(data.time).startOf("day"));
    // sift through records and use only unique dates
    const uniqueDates = [...new Set(dates)];
    // sort them babies in order to check that date is after date
    const sortedDates = uniqueDates.sort((a, b) => a.diff(b));

    let streak = 0;

    // for each date, if prev date isn't mathing to difference of 1, streak isn't added
    // using good old for loop instead of fancy stuff cause it's simples
    for (let i = 0; i < sortedDates.length; i++) {
      (i === 0 || sortedDates[i].diff(sortedDates[i - 1], "day") === 1) &&
        streak++;
    }

    return streak;
  }

  return (
    <Box
      sx={{
        m: { xs: "1.2rem auto", md: "0.8rem auto" },
        textAlign: "center",
      }}>
      <ParagraphLg text={`Your streak is`} />
      <Box className='streak-box'>
        <span>{getStreak(activityData)}</span>
      </Box>
      <ParagraphLg text={"days"} />
    </Box>
  );
}
