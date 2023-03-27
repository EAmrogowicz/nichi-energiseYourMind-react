import { Box } from "@mui/material";
import ParagraphLg from "./Typography/ParagraphLg";

export default function Streak() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData?.mood ?? [];
  const meditationData = userData?.meditation ?? [];
  const activityData = [moodData, meditationData].flat();

  function getStreak(activityData) {
    let [streak, currStreak] = [0, 0];
    let prevDate = null;

    activityData.forEach((data) => {
      const currDate = new Date(data.time);
      prevDate && prevDate.getDate() === currDate.getDate() - 1
        ? currStreak++ && (streak = Math.max(streak, currStreak))
        : (currStreak = 1);
      prevDate = currDate;
    });
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
