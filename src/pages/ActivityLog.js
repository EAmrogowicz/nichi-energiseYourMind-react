import { useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box, Grid } from "@mui/material";
import PageContainer from "../components/PageContainer";
// import ParagraphLg from "../components/Typography/ParagraphLg";
import MoodLogs from "../components/Mood/MoodLog";
import { moods } from "../components/Mood/Moods";
import MoodGrid from "../components/Mood/MoodGrid";
import SubHeading from "../components/Typography/SubHeading";
import ParagraphLg from "../components/Typography/ParagraphLg";

export default function ActivityLog() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData.mood;
  const [filteredMoodData, setFilteredMoodData] = useState([]);
  const calendarRef = useRef();

  function getStreak(moodData) {
    let [streak, currStreak] = [0, 0];
    let prevDate = null;

    moodData.forEach((data) => {
      const currDate = new Date(data.time);
      prevDate && prevDate.getDate() === currDate.getDate() - 1
        ? currStreak++ && (streak = Math.max(streak, currStreak))
        : (currStreak = 1);
      prevDate = currDate;
    });
    return streak;
  }

  function handleDateSelect(value, event) {
    const filteredData = moodData.filter((moodRecord) => {
      return (
        new Date(value.toISOString().substring(0, 10)).getTime() ===
        new Date(moodRecord.time.substring(0, 10)).getTime()
      );
    });
    console.log(filteredData);
    setFilteredMoodData(filteredData);
  }

  function tileClassName({ date }) {
    const dateString = date.toISOString().substring(0, 10);
    const hasData = userData.mood.some(
      (moodRecord) => moodRecord.time.substring(0, 10) === dateString
    );
    return hasData ? "calendar has-data" : null;
  }

  return (
    <PageContainer>
      <SubHeading text={"Your activity"} sx={{ marginTop: "1.2rem" }} />
      <Calendar
        ref={calendarRef}
        onClickDay={handleDateSelect}
        maxDate={new Date()}
        tileClassName={tileClassName}
        minDate={
          new Date(
            Math.min(...moodData.map((moodRecord) => new Date(moodRecord.time)))
          )
        }
      />
      <Box sx={{ margin: "2.4rem" }}>
        <ParagraphLg text={`Your streak is ${getStreak(moodData)} days`} />
      </Box>
      <Grid container columns={4}>
        {filteredMoodData.map((moodRecord) => {
          const matchingMood = moods.find(
            (mood) => mood.description === moodRecord.mood
          );
          const MoodIconRecord = matchingMood?.icon || null;
          return (
            <Grid item xs={2}>
              <MoodGrid
                key={matchingMood.description}
                icon={MoodIconRecord}
                desc={moodRecord.mood}
              />
            </Grid>
          );
        })}
      </Grid>
      <MoodLogs />
    </PageContainer>
  );
}
