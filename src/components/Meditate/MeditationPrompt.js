import { useState, useRef } from "react";
import { Grid, Box, FormControl } from "@mui/material";
import SubHeading from "../Typography/SubHeading";
import ParagraphLg from "../Typography/ParagraphLg";
import StandardBtn from "../Button/StandardBtn";
import MeditationIcon from "./MeditationIcon";
import MoodBtn from "../Button/MoodBtn";
import { MeditationItems } from "./MeditationItems";

import MeditateBodyScan from "./BodyScan/BodyScan.js"
import MeditateBreathing from "./Breathing/Breathing.js"
import MeditateReflect from "./Reflect/Reflect.js"


export default function MeditationPrompt({ onSubmit }) {
  const [selectedMeditation, setSelectedMeditation] = useState("");
  const timeStamp = new Date().toISOString();
  const [notes, setNotes] = useState("");
  const notesRef = useRef();

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("submitted:",submitted);
    console.log("selectedMeditation", selectedMeditation);
  };


  return (
    <>
      {submitted ? (
        (
          (selectedMeditation === "Breathing")
          ? <MeditateBreathing />
          : (selectedMeditation === "Reflection")
          ? <MeditateReflect />
          : <MeditateBodyScan />
        )
          
        ) : (
            <>
            <SubHeading text={"Which meditation would you like to do now?"} />
            <Grid
              container
              columns={3}
              // rowSpacing={{ xs: 2, sm: 6 }}
            >
            {MeditationItems.map((meditation) => {
              return (
                <MeditationIcon
                  key={meditation.description}
                  onClick={() => setSelectedMeditation(meditation.description)}
                  padding={"3.2rem"}>
                  <MoodBtn
                    className={selectedMeditation === meditation.description ? "selected" : ""}>
                      <meditation.icon
                      edge='center'
                      color='inherit'
                      sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
                      />
                  </MoodBtn>
                  <ParagraphLg text={meditation.description} />
                </MeditationIcon>
              );
            })}
            </Grid>
            <FormControl className='form'>
              <Box sx={{ m: "2.4rem" }}>
                <StandardBtn
                  name={"Meditate"}
                  onClick={handleSubmit}
                  disabled={!selectedMeditation}
                />
              </Box>
            </FormControl>
            </>
          )
      }
    </>
  );
}
