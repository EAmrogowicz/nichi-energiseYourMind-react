import { Box } from "@mui/material";
import MoodGrid from "./MoodGrid";
import { moods } from "../Mood/Moods";
import Heading4 from "../Typography/Heading4";
import ParagraphLg from "../Typography/ParagraphLg";
import MotionItem from "../Motion/MotionItem";

export default function MoodLogs() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodlog = userData?.mood;

  return (
    <>
      {!moodlog ? (
        <Box sx={{ textAlign: "center", mt: "3.2rem" }}>
          <ParagraphLg text={"Your mood records will appear here."} />
        </Box>
      ) : (
        <>
          <Box m={"2.4rem auto 1.2rem"}>
            <Heading4 text={"Recent mood entries"} />
          </Box>
          <Box
            className='moodlog-wrapper'
            sx={{
              width: "100%",
            }}>
            {moodlog
              ?.sort((a, b) => new Date(b.time) - new Date(a.time))
              .splice(0, 3)
              .map((moodRecord) => {
                const matchingMood = moods.find(
                  (mood) => mood.description === moodRecord?.description
                );
                const MoodIconRecord = matchingMood?.icon || null;

                return (
                  <MotionItem>
                    <Box
                      className='datalog-wrapper'
                      sx={{
                        width: "100%",
                        p: "1.2rem",
                        my: "1.2rem",
                        "@media (min-width: 900px)": { mx: "2.4rem" },
                      }}>
                      <Box
                        sx={{ p: "1.2rem" }}
                        key={moodRecord.time}
                        className='moodlog-item'>
                        <MoodGrid
                          icon={MoodIconRecord}
                          desc={matchingMood?.description || null}
                          time={new Date(moodRecord.time).toLocaleString(
                            "en-GB",
                            {
                              dateStyle: "short",
                              timeStyle: "short",
                              timeZone: "Europe/London",
                            }
                          )}
                          notes={moodRecord.notes}
                          iconboxsize={20}
                          iconsize={"3rem"}
                        />
                      </Box>
                    </Box>
                  </MotionItem>
                );
              })}
          </Box>
        </>
      )}
    </>
  );
}
