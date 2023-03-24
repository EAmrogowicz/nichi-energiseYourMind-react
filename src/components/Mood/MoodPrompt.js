import { useState, useRef } from "react";
import { Grid, Box, TextField, FormControl } from "@mui/material";
import MoodIcon from "./MoodIcon";
import StandardBtn from "../Button/StandardBtn";
import MoodBtn from "../Button/MoodBtn";
import PageContainer from "../PageContainer";
import SubHeading from "../Typography/SubHeading";
import ParagraphLg from "../Typography/ParagraphLg";
import { moods } from "./Moods";

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
      <SubHeading text={"How are you feeling today?"} />
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
            >
              <MoodBtn
                className={selectedMood === mood.description ? "selected" : ""}
              >
                <mood.icon
                  edge="center"
                  color="inherit"
                  sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
                />
              </MoodBtn>
              <ParagraphLg text={mood.description} />
            </MoodIcon>
          );
        })}
      </Grid>
      <FormControl className="form">
        <Box sx={{ minWidth: "75%" }}>
          <TextField
            ref={notesRef}
            id="mood-notes"
            label="Notes"
            multiline
            fullWidth
            maxRows={4}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ m: "2.4rem" }}>
          <StandardBtn
            name={"Submit"}
            onClick={handleSubmit}
            disabled={!selectedMood}
          />
        </Box>
      </FormControl>
    </>
  );
}
