import { Box } from "@mui/material";
import MoodGrid from "./MoodGrid";
import { moods } from "../Mood/Moods";
import Heading4 from "../Typography/Heading4";

export default function MoodLogs() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const moodlog = userData.mood;

  return (
    <>
      <Heading4 text={"Recent mood entries"} />
      <Box
        className='moodlog-wrapper'
        sx={{
          p: "2.4rem",
          my: "1.2rem",
          "@media (min-width: 768px)": { mx: "2.4rem" },
        }}>
        {moodlog
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .splice(0, 3)
          .map((moodRecord) => {
            const matchingMood = moods.find(
              (mood) => mood.description === moodRecord.description
            );
            const MoodIconRecord = matchingMood?.icon || null;
            return (
              <Box
                sx={{ p: "1.2rem 0" }}
                key={moodRecord.time}
                className='moodlog-item'>
                <MoodGrid
                  icon={MoodIconRecord}
                  desc={matchingMood?.description || null}
                  time={new Date(moodRecord.time).toLocaleString("en-GB", {
                    dateStyle: "short",
                    timeStyle: "short",
                    timeZone: "Europe/London",
                  })}
                  notes={moodRecord.notes}
                  iconboxsize={20}
                  iconsize={"3rem"}
                />
              </Box>
            );
          })}
      </Box>
    </>
  );
}
