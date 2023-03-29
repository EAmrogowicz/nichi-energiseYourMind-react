import { useState, useRef } from "react";
import { Box, TextField, FormControl } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
  const timeStamp = new Date();
  const [notes, setNotes] = useState("");
  const notesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const moodRecord = {
      type: "Mood",
      description: selectedMood,
      time: timeStamp,
      notes: notes,
    };
    onSubmit(moodRecord);
  };

  function handleChange(e) {
    setNotes(e.target.value);
  }

  return (
    <Box className={"boxCenter"}>
      <MotionItem>
        <SubHeading text={"How are you feeling today?"} />
      </MotionItem>
      <Grid
        container
        spacing={{ xs: "4.8rem", md: "9.6rem" }}
        columns={{ xs: 4, sm: 12 }}
        sx={{ my: "2.4rem" }}
      >
        {moods.map((mood) => {
          return (
            <MoodIcon
              key={mood.description}
              onClick={() => setSelectedMood(mood.description)}
              padding={"3.2rem"}
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
              <Box sx={{ mt: "0.8rem" }}>
                <ParagraphLg text={mood.description} />
              </Box>
            </MoodIcon>
          );
        })}
      </Grid>
      <FormControl className="form">
        <Box sx={{ minWidth: "75%" }}>
          <TextField
            className="inputField"
            ref={notesRef}
            id="mood-notes"
            label="Notes"
            variant="outlined"
            fullWidth
            maxRows={4}
            onChange={handleChange}
          />
        </Box>
        <MotionScrollIn>
          <Box>
            <StandardBtn
              name={"Submit"}
              onClick={handleSubmit}
              disabled={!selectedMood}
            />
          </Box>
        </MotionScrollIn>
      </FormControl>
    </Box>
  );
}
