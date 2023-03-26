import { useState, useRef } from "react";
import { Grid, Box, TextField, FormControl } from "@mui/material";
import SubHeading from "../Typography/SubHeading";
import ParagraphLg from "../Typography/ParagraphLg";
import StandardBtn from "../Button/StandardBtn";
import MoodIcon from "./MoodIcon";
import MoodBtn from "../Button/MoodBtn";
import { moods } from "./Moods";
// import MotionPage from "../Motion/MotionPage";
import MotionItem from "../Motion/MotionItem";
import MotionScrollIn from "../Motion/MotionScrollIn";

export default function MoodPrompt({ onSubmit }) {
  const [selectedMood, setSelectedMood] = useState("");
  const timeStamp = new Date().toISOString();
  const [notes, setNotes] = useState("");
  const notesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const moodRecord = {
      mood: selectedMood,
      time: timeStamp,
      notes: notes,
    };
    onSubmit(moodRecord);
  };

  function handleChange(e) {
    setNotes(e.target.value);
  }

  return (
    <>
      <MotionItem>
        <SubHeading text={"How are you feeling today?"} />
      </MotionItem>
      <Grid
        container
        columns={6}
        // rowSpacing={{ xs: 2, sm: 6 }}
      >
        {moods.map((mood) => {
          return (
            <MoodIcon
              key={mood.description}
              onClick={() => setSelectedMood(mood.description)}
              padding={"3.2rem"}>
              {/* <MotionItem> */}
              <MoodBtn
                className={selectedMood === mood.description ? "selected" : ""}>
                <mood.icon
                  edge='center'
                  color='inherit'
                  sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
                />
              </MoodBtn>
              {/* </MotionItem> */}
              <ParagraphLg text={mood.description} />
            </MoodIcon>
          );
        })}
      </Grid>
      <FormControl className='form'>
        <Box sx={{ minWidth: "75%" }}>
          <TextField
            ref={notesRef}
            id='mood-notes'
            label='Notes'
            multiline
            fullWidth
            maxRows={4}
            onChange={handleChange}
          />
        </Box>
        <MotionScrollIn>
          <Box sx={{ m: "2.4rem" }}>
            <StandardBtn
              name={"Submit"}
              onClick={handleSubmit}
              disabled={!selectedMood}
            />
          </Box>
        </MotionScrollIn>
      </FormControl>
    </>
  );
}
