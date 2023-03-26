import React from 'react';

import SubHeading from "../Typography/SubHeading";
import MeditationIcon from "./MeditationIcon";
import { Box } from "@mui/material";

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';


export default function MeditationSuccess () {
   return (
      <>
         <box
            width={"100%"}
            sx={{
               display: "flex",
               justifyContent: "space-between",
               margin: "3.2rem auto",
            }}>
               <MeditationIcon padding={"0.2rem"}>
                  <CelebrationIcon
                     edge='center'
                     color='inherit'
                     sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
               </MeditationIcon>      
               <SubHeading text={"Well done!"} />
               <SubHeading text={"It is so good to know that you are spending time on yourself."} />
               <SubHeading text={"You should should be very proud of yourself!"} />
         </box>
      </>

   )
}

