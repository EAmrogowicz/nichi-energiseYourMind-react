import { useState } from "react";
import { Grid, Box, FormControl } from "@mui/material";
import SubHeading from "../Typography/SubHeading";
import ParagraphLg from "../Typography/ParagraphLg";
import StandardBtn from "../Button/StandardBtn";
import MeditationIcon from "./MeditationIcon";
import MoodBtn from "../Button/MoodBtn";
import { MeditationItems } from "./MeditationItems";
import MeditateBodyScan from "./BodyScan/BodyScan.js";
import MeditateBreathing from "./Breathing/Breathing.js";
import MeditateReflect from "./Reflect/Reflect.js";

export default function MeditationPrompt({ onSubmit }) {
  const [selectedMeditation, setSelectedMeditation] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("submitted:", submitted);
    console.log("selectedMeditation", selectedMeditation);
  };

  return (
    <>
      {submitted ? (
        selectedMeditation === "Breathing" ? (
          <MeditateBreathing />
        ) : selectedMeditation === "Reflection" ? (
          <MeditateReflect />
        ) : (
          <MeditateBodyScan />
        )
      ) : (
        <>
          <SubHeading text={"Which meditation would you like to do now?"} />
          <Grid container columns={3}>
            {MeditationItems.map((meditation) => {
              return (
                <MeditationIcon
                  key={meditation.meditation}
                  onClick={() => setSelectedMeditation(meditation.meditation)}
                  padding={"3.2rem"}
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
                  <ParagraphLg text={meditation.meditation} />
                </MeditationIcon>
              );
            })}
          </Grid>
          <FormControl className="form">
            <Box sx={{ m: "0.2rem" }}>
              <StandardBtn
                name={"Meditate"}
                onClick={handleSubmit}
                disabled={!selectedMeditation}
              />
            </Box>
          </FormControl>
        </>
      )}
    </>
  );
}
