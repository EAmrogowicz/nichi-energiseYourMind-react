import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { Drawer, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import StandardBtn from "../../Button/StandardBtn";
import IconBtn from "../../Button/IconBtn";
import IconButton from "@mui/material/IconButton";
import SubHeading from "../../Typography/SubHeading";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TimerIcon from '@mui/icons-material/Timer';

import MeditationSuccess from '../MeditationSuccess';
import Reflections from './reflections.json';

import './style.css';
import gongBell from '../audio/gong2.mp3';

const reflectionText = Reflections[Math.floor(Math.random() * Reflections.length)].toReflectOn;


export default function MeditateReflect () {


   //--PW (1) Local Storage for activity log
   //--PW Get Data from local storage and set them into (default) state "existingMeditationData"

   const userData = JSON.parse(localStorage.getItem("userData"));

   const [existingMeditationData, setExistingMeditationData] = useState(userData.meditation || []);

   const timeStamp = new Date().toISOString();


   let meditationRecord = {
      meditation: "Reflection",
      time: timeStamp,
   };



   function addMeditationRecord(meditationRecord) {
      const updatedMeditationData = [...existingMeditationData, meditationRecord];
      setExistingMeditationData(updatedMeditationData);
      userData.meditation = updatedMeditationData;
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("userData", userData)
   }

   //--PW State for timer drawer
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);


   //--PW (2) Run the meditation process   
   //--PW set the default meditation duration to 60s
   const startTime = 60;

   //--PW Play the gong
   const [hitGong] = useSound(gongBell);

   //--PW Function to display the time string
   function timePadding (num, padding) {
      let numString = (num).toString().padStart(padding, '0');
      return numString;
   }

   const [timeInSec, setTimeInSec] = useState(startTime);

   //--PW Create the state of whether the meditation timer is currently running
   const [isActive, setIsActive] = useState(false);

   //--PW Create the state of whether the meditation timer has ended
   const [isEnded, setIsEnded] = useState(false);

   //--PW To toggle between playing or pausing the meditation timer
   const playPause = () => { 
      setIsActive(!isActive); 
      setIsEnded(false); 
      if (setIsActive) {
         hitGong();
      };
   };

   //--PW to reset the meditation session timer
   const reset = () => { 
      setTimeInSec(startTime); 
      setIsActive(false); 
      setIsEnded(false); 
   };


   const handleClickSame = () => {
      setIsEnded(!isEnded);
   }

   //--PW hit the gong when session has ended.
   const playSound = (medDurationMin) => { 
      if (!isEnded) { 
      hitGong(); 
      setTimeInSec(true); 
      addMeditationRecord(meditationRecord);    
      reset();
      setIsEnded(!isEnded);
      } 
   };



   useEffect( () => {

      let interval = null;

      //--PW when time is up!
      if (timeInSec <= 0) {
         setIsActive(false);
         playSound();
      };

      //--PW setinterval to reduce time by 1 second
      if (isActive) {
         interval = setInterval(() => {
            setTimeInSec((s) => s - 1);
         }, 1000);
      } else if (!isActive && timeInSec !== 0) {
         clearInterval(interval);
      };

      return () => clearInterval(interval);

      }
      , [isActive, timeInSec, playSound]
   );
   
   //--PW Prepare the timer countdown as a string
   let timeString =(Math.floor(timeInSec / 60)) + `:` + timePadding(timeInSec % 60, 2);

   return (
      <>
      {(!isEnded) ? (

            <div className="meditateContainer">
               <h1>
                  Reflect Meditation
               </h1>
               <br/>
               <h3>
                  {reflectionText}
               </h3>

               <div className="animeContainer">

                  <div className={`dropletPre ${isActive ? 'droplet dropletLeft' : ''}`}>    
                  </div>

                  <div className="cup">
                     <div className={`${isActive ? 'ripples' : ''}`}></div>
                     <div className="cupLid"></div>
                     <div className="cupBody"></div>
                     <div className="cupFeet"></div>

                     <div className="cup2Lid"></div>
                     <div className="cup2Body"></div>
                     <div className="cup2Feet"></div>
                  </div>

               </div>

            <stack>
                  <Box
                     width={"100%"}
                     sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "0.2rem auto",
                        }}>
                     <div className="playPause" onClick={playPause}>
                        {isActive
                           ? (<IconButton className='btn btnRound btnSpacing' aria-label='Pause'><PauseIcon fontSize="sm" /></IconButton>)
                           : (<IconButton className='btn btnRound btnSpacing' aria-label='Pause'><PlayArrowIcon fontSize="sm" /></IconButton>)
                        }
                     </div>

                     <IconButton className='btn btnRound btnSpacing' aria-label='timer menu'>
                        <TimerIcon onClick={() => setIsDrawerOpen(true)} />
                     </IconButton>

                     <IconButton className='btn btnRound btnSpacing' aria-label='reset'>
                        <RestartAltIcon onClick={reset} />
                     </IconButton>   

                  </Box>
               
                  <Box
                     width={"100%"}
                     sx={{
                        margin: "1.2rem auto",
                        }}>
                     <SubHeading text={timeString}></SubHeading> 
                  </Box>   

                  <Box
                     width={"100%"}
                     sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "0.2rem auto",
                        }}>

                     <Link to='/'>
                        <IconBtn />
                     </Link>
                  </Box>

               </stack>

               <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                  <Box
                     width={"100%"}
                     sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "0.2rem auto",
                        }}>
                     <ButtonGroup variant="text" className='btn btnPill' aria-label="button group">
                        <Button className="btnFont" onClick={() => setTimeInSec(60)}>1min</Button>
                        <Button className="btnFont" onClick={() => setTimeInSec(120)}>2min</Button>
                        <Button className="btnFont" onClick={() => setTimeInSec(300)}>5min</Button>
                        <Button className="btnFont" onClick={() => setTimeInSec(600)}>10min</Button>
                     </ButtonGroup>
                  </Box>   
               </Drawer>   

            </div>
            
         ) : (
            <>
               <stack>
                  <MeditationSuccess />
                  <Box
                     width={"100%"}
                     sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "3.2rem auto",
                        }}>
                     
                     <Link to='/'>
                        <IconBtn />
                     </Link>

                     <Link to='/meditation'>
                        <StandardBtn name={"Meditate Again"} onClick={handleClickSame}/>
                     </Link>
                  </Box>
               </stack>
               
            </>

         )}  
      </>

   );
};
