import { Box, Stack, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MotionPage from "../PageContainer";
import MotionItem from "../Motion/MotionItem";
import MotionScrollIn from "../Motion/MotionScrollIn";
import Heading4 from "../Typography/Heading4";
import ParagraphLg from "../Typography/ParagraphLg";
import StandardCard from "../StandardCard";
import MoodIcon from "./MoodIcon";
import StandardBtn from "../Button/StandardBtn";
import IconBtn from "../Button/IconBtn";
import ZenQuote from "../Quotes";
import { meditations } from "../Meditate/Meditations";
import Heading5 from "../Typography/Heading5";

export default function MoodSelect({ moods, moodRecord }) {
  const selectedMood = moodRecord.mood;
  const badMood = ["Sad", "Awful"];

  const SelectedMoodIcon = moods.find(
    (mood) => mood.description === selectedMood
  ).icon;

  const matchingMeditation = meditations.filter((meditation) =>
    meditation.suitableMood.includes(selectedMood)
  )[0];

  const navigate = useNavigate();

  const handleMeditationCardSelect = () => {
    navigate("/meditation", {
      state: { meditationSelected: matchingMeditation.meditation },
    });
  };

  return (
    <MotionPage>
      <Paper elevation={5} className="paper-lg-bg" sx={{ py: "2.4rem" }}>
        <Box className={"backdropBlur"}> </Box>
        <Box sx={{ textAlign: "center" }} minWidth={"50vw"}>
          <Heading5 text={selectedMood} />
        </Box>
        <MoodIcon padding={"3.2rem"}>
          <SelectedMoodIcon
            edge="center"
            color="inherit"
            className="moodBtn"
            sx={{ width: "6.4rem", height: "6.4rem", borderRadius: "50%" }}
          />
        </MoodIcon>
        {badMood.includes(selectedMood) && (
          <Box sx={{ textAlign: "center" }}>
            <ParagraphLg text={"Sorry, you feel that way."} />
          </Box>
        )}
        <Box sx={{ m: "1.2rem auto" }} className="zen-quote">
          <ZenQuote mood="selectedMood" />
        </Box>
      </Paper>

      <Stack>
        {matchingMeditation && (
          <MotionItem>
            <Box sx={{ m: "2.4rem auto" }}>
              <Heading4
                text={`${
                  badMood.includes(selectedMood)
                    ? "To improve your mood, w"
                    : "W"
                }e recommed following meditation${
                  matchingMeditation > 1 ? "s" : ""
                } for you to try:`}
              />
            </Box>
            <Box sx={{ m: "1.2rem auto", width: "100%" }}>
              <StandardCard
                key={matchingMeditation.meditation}
                height={"320rem"}
                classCss={"stnCard"}
                imglink={matchingMeditation.meditationImg}
                title={matchingMeditation.meditation}
                sx={{ my: "2.4rem" }}
                oncClick={handleMeditationCardSelect}
              />
            </Box>
          </MotionItem>
        )}
        <MotionScrollIn>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "3.2rem auto",
            }}
          >
            <Link to="/">
              <IconBtn />
            </Link>
            <Link to="/activity-log">
              <StandardBtn name={"Activity"} />
            </Link>
          </Box>
        </MotionScrollIn>
      </Stack>
    </MotionPage>
  );
}
