import { useState, useRef } from "react";
import Calendar from "react-calendar";
import { Box, Grid, Stack } from "@mui/material";
import PageContainer from "../components/PageContainer";
import ParagraphLg from "../components/Typography/ParagraphLg";
import MoodLogs from "../components/Mood/MoodLog";
import { moods } from "../components/Mood/Moods";
import MoodGrid from "../components/Mood/MoodGrid";
import SubHeading from "../components/Typography/SubHeading";

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
    setFilteredMoodData(filteredData);
  }

  function dayClassName({ date }) {
    const dateString = date.toISOString().substring(0, 10);
    const hasData = userData.mood.some(
      (moodRecord) => moodRecord.time.substring(0, 10) === dateString
    );
    return hasData ? "react-calendar__tile--hasActive" : null;
  }

  return (
    <PageContainer size={"lg"} stackDisable={true}>
      <Box sx={{ m: "1.2rem auto 2.4rem" }}>
        <SubHeading text={"Your activity"} />
      </Box>
      <Grid container columns={12} width={"100%"}>
        <Grid item xs={12} sm='auto' md={5} sx={{ mx: "auto" }}>
          <Stack>
            <Box sx={{ m: "1.2rem auto" }}>
              <Calendar
                ref={calendarRef}
                onClickDay={handleDateSelect}
                maxDate={new Date()}
                tileClassName={dayClassName}
                minDate={
                  new Date(
                    Math.min(
                      ...moodData.map((moodRecord) => new Date(moodRecord.time))
                    )
                  )
                }
              />
            </Box>
            <Box sx={{ m: "2.4rem auto", textAlign: "center" }}>
              <ParagraphLg text={`Your streak is`} />
              <Box className='streak-box'>
                <span>{getStreak(moodData)}</span>
              </Box>
              <ParagraphLg text={"days"} />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm='auto' md={7} sx={{ mx: "auto" }}>
          <Stack>
            {filteredMoodData.map((moodRecord) => {
              const matchingMood = moods.find(
                (mood) => mood.description === moodRecord.mood
              );
              const MoodIconRecord = matchingMood?.icon || null;
              return (
                <Box key={moodRecord.time}>
                  <MoodGrid icon={MoodIconRecord} desc={moodRecord.mood} />
                </Box>
              );
            })}
            <MoodLogs />
          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
