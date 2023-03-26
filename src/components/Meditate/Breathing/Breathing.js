import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import StandardBtn from "../../Button/StandardBtn";
import IconBtn from "../../Button/IconBtn";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import MeditationSuccess from '../MeditationSuccess';

import './style.css';
import gongBell from '../audio/gong1.mp3';



export default function MeditateBreath () {


   //--PW (1) Local Storage for activity log
   //--PW  Get Data from local storage and set them into (default) state "existingMeditationData"

   const userData = JSON.parse(localStorage.getItem("userData"));

   const [existingMeditationData, setExistingMeditationData] = useState(userData.meditation || []);

   const timeStamp = new Date().toISOString();

   const meditationRecord = {
      meditation: "Breathing",
      time: timeStamp,
   };


   function addMeditationRecord(meditationRecord) {
      const updatedMeditationData = [...existingMeditationData, meditationRecord];
      setExistingMeditationData(updatedMeditationData);
      userData.meditation = updatedMeditationData;
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("userData", userData)
   }


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

  //--Pei Create the state of whether the meditation timer has ended
   const [isEnded, setIsEnded] = useState(false);

   //--PW To toggle between playing or pausing the meditation timer
   const playPause = () => { 
      setIsActive(!isActive); 
      setIsEnded(false); 
      if (setIsActive) {
      hitGong();
      };
   };

   //--Pei to reset the meditation session timer
   const reset = () => { 
      setTimeInSec(startTime); 
      setIsActive(false); 
      setIsEnded(false); 
   };

   //--PW hit the gong when session has ended.
   const playSound = () => { 
      if (!isEnded) { 
         hitGong(); 
         setTimeInSec(true); 
         addMeditationRecord(meditationRecord);
         reset();
         setIsEnded(!isEnded);
      } 
   };

   const handleClickSame = () => {
      setIsEnded(!isEnded);
   }


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
   
   return (

      <>
      {(!isEnded) ? (

            <div className="meditateContainer">
               <h1>
                  Breathe Meditation
               </h1>
               <br/>
               <h3>
                  As the blob swells, breathe in and <br/>
                  then breathe out as it contracts.
               </h3>

               <div className="animeContainer">
                  <div className={`blobbly-blob ${isActive ? 'blobbly-blob-swell' : ''}`}>
                  </div>
               </div>

               <div className="playPause" onClick={playPause}>
                  {isActive
                     ? <PauseIcon fontSize="sm" />
                     : <PlayArrowIcon fontSize="sm"/>}
               </div>
               
               <h2>
                  <div className="timerCount">
                     {(Math.floor(timeInSec / 60))}:{timePadding(timeInSec % 60, 2)}
                  </div>            
               </h2>      


               <div className="row">
                  <button className='btnRound' onClick={() => setTimeInSec(600)}>
                     10min
                  </button>

                  <button className='btnRound' onClick={() => setTimeInSec(300)}>
                     5min
                  </button>

                  <button className='btnRound' onClick={() => setTimeInSec(120)}>
                     2min
                  </button>

                  <button className='btnRound' onClick={() => setTimeInSec(60)}>
                     1min
                  </button>
               {/* //--Pei 10sec button for testing only  */}
                  <button className='btnRound' onClick={() => setTimeInSec(10)}>
                     10sec
                  </button>
               </div>

               <div className='row'>
                  <button className={`btnRound btnRound-${isActive ? 'active' : 'inactive'}`} onClick={playPause}>
                     {isActive
                        ? <PauseIcon />
                        : <PlayArrowIcon  />}
                  </button>

                  <button className='btnRound' onClick={reset}>
                     <RestartAltIcon />
                  </button>

               </div>
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
