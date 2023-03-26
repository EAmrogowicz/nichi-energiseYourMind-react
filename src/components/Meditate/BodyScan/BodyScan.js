import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import SubHeading from "../../Typography/SubHeading";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import './style.css';
import gongBell from '../audio/gong3.mp3';



export default function MeditateBodyScan () {


   //--PW (1) Local Storage for activity log
   //--PW Get Data from local storage and set them into (default) state "existingMeditationData"

   const userData = JSON.parse(localStorage.getItem("userData"));

   const [existingMeditationData, setExistingMeditationData] = useState(userData.meditation || []);

   const timeStamp = new Date().toISOString();

   const meditationRecord = {
      meditation: "Spotlighting",
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

   //--PW hit the gong when session has ended.
   const playSound = () => { 
      if (!isEnded) { 
         hitGong(); 
         setTimeInSec(true); 
         addMeditationRecord(meditationRecord);         
         reset();
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
      //--PW also set the gong to go off every 20sec
      if (isActive) {
         interval = setInterval(() => {
            setTimeInSec((s) => s - 1);
         }, 1000);
         console.log("interval:", interval);

         const lastTwoDigits = parseInt(interval.toString().slice(-2)); 

         console.log("lastTwoDigits:", lastTwoDigits);

         if (((lastTwoDigits !== 10)) && (lastTwoDigits % 5 === 0) && (lastTwoDigits % 4 === 0)) {
            hitGong();
         };
      } else if (!isActive && timeInSec !== 0) {
         clearInterval(interval);
      };

      return () => clearInterval(interval);

      }
      , [isActive, timeInSec, playSound]
   );

   return (
      <div className="meditateContainer">
         <h1>
            Body Scan Meditation
         </h1>
         <br/>
         <h3>
            Starting from your feet, focus on the sensations there when the first bell rings.
            <br/>With subsequent bells, move on to your abdomen, your chest and your forehead on each ring of the bell. 
            <br/>On the next bell ring after spotlighting on your forehead, go back your feet again and restart the whole process.
            <br/>It's alright if your mind wanders, just gently bring your mind back and start from your feet again. 
         </h3>

         <div className="animeContainer">
            <div className="mug">
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
            {/* //--PW 10sec button for testing only  */}
            <button className='btnRound' onClick={() => setTimeInSec(10)}>
               10sec
            </button>
         </div>

         <div className='row'>
            <button className={`btnRound btnRound-${isActive ? 'active' : 'inactive'}`} onClick={playPause}>
               {isActive
                  ? <PauseIcon />
                  : <PlayArrowIcon />}
            </button>

            <button className='btnRound' onClick={reset}>
               <RestartAltIcon />
            </button>
            
         </div>
      </div>

   );
};
