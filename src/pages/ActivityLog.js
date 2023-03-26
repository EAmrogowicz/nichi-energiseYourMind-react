import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Stack, Paper } from "@mui/material";
import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";
import MotionItem from "../components/Motion/MotionItem";
import SubHeading from "../components/Typography/SubHeading";
import Heading4 from "../components/Typography/Heading4";
import ParagraphLg from "../components/Typography/ParagraphLg";
import Calendar from "react-calendar";
import IconBtn from "../components/Button/IconBtn";
import MoodLogs from "../components/Mood/MoodLog";
import MoodGrid from "../components/Mood/MoodGrid";
import MoodMost from "../components/Mood/MoodMost";
import { moods } from "../components/Mood/Moods";

export default function ActivityLog() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData?.mood;
  const meditationData = userData?.meditation;
  const [filteredMoodData, setFilteredMoodData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const calendarRef = useRef();
  const minDate =
    moodData &&
    new Date(
      Math.min(...moodData.map((moodRecord) => new Date(moodRecord.time)))
    );

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
    <PageContainer size={"md"}>
      {!moodData || !meditationData ? (
        <MotionPage>
          <Box sx={{ m: "1.2rem auto 2.4rem", textAlign: "center" }}>
            <SubHeading text={"Your activity"} />
            <ParagraphLg text={"Nothing here yet."} />
          </Box>
          <Box>
            <Link to='/'>
              <IconBtn />
            </Link>
          </Box>
        </MotionPage>
      ) : (
        <>
          <MotionItem>
            <Box sx={{ m: "1.2rem auto 2.4rem" }}>
              <SubHeading text={"Your activity"} />
            </Box>
          </MotionItem>

          <Box
            sx={{
              m: "0 !important",
              display: "grid",
              "@media( min-width: 900px)": {
                gridTemplateColumns: "repeat(12, 1fr)",
              },
            }}>
            <Box
              sx={{
                mx: "auto",
                "@media( min-width: 900px)": { gridArea: "1/1/1/6" },
                width: "100%",
              }}>
              <MotionItem>
                <Stack
                  sx={{
                    "@media(min-width:900px)": {
                      flexDirection: "column-reverse",
                    },
                  }}>
                  <Paper
                    elevation={5}
                    className='paper-lg-bg'
                    sx={{
                      "@media( min-width: 900px)": { p: "2.4rem" },
                    }}>
                    <Grid container columns={2}>
                      <MotionItem>
                        <Grid item xs={2} sm={1}>
                          <Stack>
                            <Box
                              sx={{
                                m: "1.2rem auto",
                                textAlign: "center",
                                "@media( min-width: 900px)": { my: "2.4rem" },
                              }}>
                              <ParagraphLg text={`Your streak is`} />
                              <Box className='streak-box'>
                                <span>{getStreak(moodData)}</span>
                              </Box>
                              <ParagraphLg text={"days"} />
                            </Box>
                          </Stack>
                        </Grid>
                      </MotionItem>
                      <MotionItem>
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
                            <Box
                              sx={{
                                "@media( max-width: 900px)": { mb: "2.4rem" },
                              }}>
                              <MoodMost />
                            </Box>
                          </Stack>
                        </Grid>
                      </MotionItem>
                    </Grid>
                  </Paper>
                  <MotionItem>
                    <Box sx={{ m: "2.4rem auto" }}>
                      <Calendar
                        ref={calendarRef}
                        onClickDay={handleDateSelect}
                        maxDate={new Date()}
                        tileClassName={dayClassName}
                        minDate={minDate}
                      />
                    </Box>
                  </MotionItem>
                </Stack>
              </MotionItem>
            </Box>
            <Box
              sx={{
                mx: "auto",
                "@media( min-width: 900px)": { gridArea: "1/6/1/13" },
                width: "100%",
              }}>
              <MotionItem>
                <Stack>
                  {selectedDate && filteredMoodData.length > 0 ? (
                    <>
                      <Heading4
                        text={`Entries for ${new Date(
                          selectedDate
                        ).toLocaleString("en-GB", {
                          dateStyle: "short",
                          timeZone: "Europe/London",
                        })}`}
                      />
                      <MotionItem>
                        <Box
                          className='moodlog-wrapper'
                          sx={{
                            width: "100%",
                            p: "2.4rem",
                            my: "1.2rem",
                            "@media (min-width: 900px)": { mx: "2.4rem" },
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
                                  <MotionItem>
                                    <MoodGrid
                                      icon={MoodIconRecord}
                                      desc={matchingMood?.description || null}
                                      time={new Date(
                                        moodRecord.time
                                      ).toLocaleString("en-GB", {
                                        timeStyle: "short",
                                        timeZone: "Europe/London",
                                      })}
                                      notes={moodRecord.notes}
                                      iconboxsize={20}
                                      iconsize={"3rem"}
                                    />
                                  </MotionItem>
                                </Box>
                              );
                            })}
                        </Box>
                      </MotionItem>
                    </>
                  ) : (
                    <MotionItem>
                      <MoodLogs />
                    </MotionItem>
                  )}
                </Stack>
              </MotionItem>
            </Box>
          </Box>
        </>
      )}
    </PageContainer>
  );
}
