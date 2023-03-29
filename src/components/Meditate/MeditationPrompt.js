import { useState } from "react";
import { useLocation } from "react-router";
import { Box, FormControl } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SubHeading from "../Typography/SubHeading";
import ParagraphLg from "../Typography/ParagraphLg";
import StandardBtn from "../Button/StandardBtn";
import MeditationIcon from "./MeditationIcon";
import MoodBtn from "../Button/MoodBtn";
import { MeditationItems } from "./MeditationItems";
import MeditateBodyScan from "./BodyScan/BodyScan.js";
import MeditateBreathing from "./Breathing/Breathing.js";
import MeditateReflect from "./Reflect/Reflect.js";
import MotionPage from "../Motion/MotionPage";
import MotionScrollIn from "../Motion/MotionScrollIn";

export default function MeditationPrompt({ onSubmit }) {
  const location = useLocation();
  const meditationSuggested = location.state?.meditationSuggested;
  const [selectedMeditation, setSelectedMeditation] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("submitted:", submitted);
    console.log("selectedMeditation", selectedMeditation);
  };

  return (
    <Box className={"boxCenter"}>
      {submitted || meditationSuggested ? (
        selectedMeditation === "Breathing" ? (
          <MotionPage>
            <MeditateBreathing />
          </MotionPage>
        ) : selectedMeditation === "Reflection" ? (
          <MotionPage>
            <MeditateReflect />
          </MotionPage>
        ) : (
          <MotionPage>
            <MeditateBodyScan />
          </MotionPage>
        )
      ) : (
        <Box className={"boxCenter"}>
          <SubHeading text={"Which meditation would you like to do now?"} />

          <Grid
            container
            spacing={{ xs: "4.8rem", md: "9.6rem" }}
            columns={{ xs: 4, sm: 12 }}
            sx={{ my: "2.4rem" }}
          >
            {MeditationItems.map((meditation) => {
              return (
                <MeditationIcon
                  key={meditation.meditation}
                  onClick={() => setSelectedMeditation(meditation.meditation)}
                  // padding={"3.2rem"}
                >
                  <MoodBtn
                    className={
                      selectedMeditation === meditation.meditation
                        ? "selected"
                        : ""
                    }
                  >
                    <meditation.icon
                      edge="center"
                      color="inherit"
                      sx={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%",
                      }}
                    />
                  </MoodBtn>
                  <Box sx={{ mt: "0.8rem" }}>
                    <ParagraphLg text={meditation.description} />
                  </Box>
                </MeditationIcon>
              );
            })}
          </Grid>

          <MotionScrollIn>
            <FormControl className="form">
              <Box>
                <StandardBtn
                  name={"Meditate"}
                  onClick={handleSubmit}
                  disabled={!selectedMeditation}
                />
              </Box>
            </FormControl>
          </MotionScrollIn>
        </Box>
      )}
    </Box>
  );
}
