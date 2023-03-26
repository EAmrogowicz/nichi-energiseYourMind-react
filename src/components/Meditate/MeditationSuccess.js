import React from 'react';

import SubHeading from "../Typography/SubHeading";
import MeditationIcon from "./MeditationIcon";


import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';


export default function MeditationSuccess () {
   return (
      <>
         <MeditationIcon padding={"0rem"}>
            <CelebrationIcon
               edge='center'
               color='inherit'
               sx={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
            />
         </MeditationIcon>
         <SubHeading text={"Well done!"} />
         <SubHeading text={"It is so good to be able to spend time on yourself!"} />
         

      </>

   )
}

