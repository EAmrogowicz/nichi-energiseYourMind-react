import { useState, useRef } from "react";
import Calendar from "react-calendar";
import { Box, Grid, Stack, Paper } from "@mui/material";
import PageContainer from "../components/PageContainer";
import ParagraphLg from "../components/Typography/ParagraphLg";
import Heading4 from "../components/Typography/Heading4";
import MoodLogs from "../components/Mood/MoodLog";
import { moods } from "../components/Mood/Moods";
import MoodGrid from "../components/Mood/MoodGrid";
import MoodMost from "../components/Mood/MoodMost";
import SubHeading from "../components/Typography/SubHeading";

export default function ActivityLog() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData.mood;
  const [filteredMoodData, setFilteredMoodData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
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
    const selectedDate = new Date(value.toISOString().substring(0, 10));
    const filteredData = moodData.filter((moodRecord) => {
      return (
        selectedDate.getTime() ===
        new Date(moodRecord.time.substring(0, 10)).getTime()
      );
    });
    setSelectedDate(selectedDate);
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
            <Paper
              elevation={5}
              className='paper-lg-bg'
              sx={{
                m: "2.4rem auto",
                "@media( min-width: 768px)": { p: "2.4rem" },
              }}>
              <Grid container columns={2}>
                <Grid item xs={2} sm={1}>
                  <Stack>
                    <Box
                      sx={{
                        m: "1.2rem auto",
                        textAlign: "center",
                        "@media( min-width: 768px)": { my: "2.4rem" },
                      }}>
                      <ParagraphLg text={`Your streak is`} />
                      <Box className='streak-box'>
                        <span>{getStreak(moodData)}</span>
                      </Box>
                      <ParagraphLg text={"days"} />
                    </Box>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Stack>
                    <Box sx={{ "@media( max-width: 768px)": { mb: "2.4rem" } }}>
                      <MoodMost />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} sm='auto' md={7} sx={{ mx: "auto" }}>
          <Stack>
            {selectedDate && filteredMoodData.length > 0 ? (
              <>
                <Heading4
                  text={`Entries for ${new Date(selectedDate).toLocaleString(
                    "en-GB",
                    {
                      dateStyle: "short",
                      timeZone: "Europe/London",
                    }
                  )}`}
                />
                <Box
                  className='moodlog-wrapper'
                  sx={{
                    p: "2.4rem",
                    my: "1.2rem",
                    "@media (min-width: 768px)": { mx: "2.4rem" },
                  }}>
                  {filteredMoodData
                    .sort((a, b) => new Date(b.time) - new Date(a.time))
                    .map((moodRecord) => {
                      const matchingMood = moods.find(
                        (mood) => mood.description === moodRecord.mood
                      );
                      const MoodIconRecord = matchingMood?.icon || null;
                      return (
                        <Box
                          className='moodlog-item'
                          sx={{
                            p: "1.2rem",
                          }}
                          key={moodRecord.time}>
                          <MoodGrid
                            icon={MoodIconRecord}
                            desc={matchingMood?.description || null}
                            time={new Date(moodRecord.time).toLocaleString(
                              "en-GB",
                              {
                                timeStyle: "short",
                                timeZone: "Europe/London",
                              }
                            )}
                            notes={moodRecord.notes}
                            iconboxsize={20}
                            iconsize={"3rem"}
                          />
                        </Box>
                      );
                    })}
                </Box>
              </>
            ) : (
              <MoodLogs />
            )}
          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
