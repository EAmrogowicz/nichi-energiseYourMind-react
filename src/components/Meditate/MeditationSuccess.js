import React from "react";
import { Box } from "@mui/material";
import SubHeading from "../Typography/SubHeading";
import MeditationIcon from "./MeditationIcon";
import CelebrationIcon from "@mui/icons-material/Celebration";
import MotionPage from "../Motion/MotionPage";
import ParagraphLg from "../Typography/ParagraphLg";

export default function MeditationSuccess() {
  return (
    <MotionPage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CelebrationIcon
          edge="center"
          color="inherit"
          sx={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
          }}
        />
        <SubHeading text={"Well done!"} />
      </Box>
      <Box sx={{ my: "3.2rem", textAlign: "center" }}>
        <ParagraphLg
          text={"It is so good to know that you are spending time on yourself."}
        />
        <ParagraphLg text={"You should should be very proud of yourself!"} />
      </Box>
    </MotionPage>
  );
}
