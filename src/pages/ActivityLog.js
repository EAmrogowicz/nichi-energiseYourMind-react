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
import { MeditationItems } from "../components/Meditate/MeditationItems";
import Streak from "../components/Streak";

// MAYBE: combine same moods in the display for the day?
export default function ActivityLog() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodData = userData.mood;
  const meditationData = userData.meditation;
  const activityData =
    (moodData != null || meditationData != null) &&
    [moodData, meditationData].flat();
  const iconSource = [moods, MeditationItems].flat();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const calendarRef = useRef();
  const minDate =
    activityData &&
    new Date(Math.min(...activityData.map((data) => new Date(data?.time))));

  function handleDateSelect(value) {
    const selectedDate = new Date(value.toISOString().substring(0, 10));
    const dataByDate = activityData.filter((data) => {
      return (
        selectedDate.getTime() ===
        new Date(data.time.substring(0, 10)).getTime()
      );
    });
    setSelectedDate(selectedDate);
    setFilteredData(dataByDate);
    console.log("filteredData");
    console.log(dataByDate);
  }

  function dayClassName({ date }) {
    const dateString = date.toISOString().substring(0, 10);
    const hasData = activityData.some(
      (data) => data.time.substring(0, 10) === dateString
    );
    return hasData ? "react-calendar__tile--hasActive" : null;
  }

  return (
    <PageContainer size={"md"}>
      {!activityData ? (
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
                    <MotionItem>
                      <Grid container columns={2}>
                        <Grid item xs={2} sm={1}>
                          <Stack>
                            <Streak />
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
                            <Box
                              sx={{
                                "@media( max-width: 900px)": { mb: "2.4rem" },
                              }}>
                              <MoodMost />
                            </Box>
                          </Stack>
                        </Grid>
                      </Grid>
                    </MotionItem>
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
                  {selectedDate && filteredData.length > 0 ? (
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
                          className='datalog-wrapper'
                          sx={{
                            width: "100%",
                            p: "2.4rem",
                            my: "1.2rem",
                            "@media (min-width: 900px)": { mx: "2.4rem" },
                          }}>
                          {filteredData
                            .sort((a, b) => new Date(b.time) - new Date(a.time))
                            .map((data) => {
                              const matchingM = iconSource.find(
                                (src) => src.description === data.description
                              );
                              console.log(matchingM);
                              const activityIconRecord =
                                matchingM?.icon || null;
                              return (
                                <Box
                                  className='datalog-item'
                                  sx={{
                                    p: "1.2rem",
                                  }}
                                  key={data.time}>
                                  <MotionItem>
                                    <MoodGrid
                                      icon={activityIconRecord}
                                      desc={matchingM?.description || null}
                                      time={new Date(data.time).toLocaleString(
                                        "en-GB",
                                        {
                                          timeStyle: "short",
                                          timeZone: "Europe/London",
                                        }
                                      )}
                                      notes={data?.notes}
                                      type={data?.type}
                                      // duration={data?.duration}
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
