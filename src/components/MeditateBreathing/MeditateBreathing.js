import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


import './style.css';

import gongBell from './audio/gong1.mp3';


export default function MeditateBreath () {

   //--Pei set the default meditation duration to 60s
   const startTime = 60;

   //--Pei Play the gong
   const [hitGong] = useSound(gongBell);

   //--Pei Function to display the time string
   function timePadding (num, padding) {
      let numString = (num).toString().padStart(padding, '0');
      return numString;
   }

   const [timeInSec, setTimeInSec] = useState(startTime);

   //--Pei Create the state of whether the meditation timer is currently running
   const [isActive, setIsActive] = useState(false);

  //--Pei Create the state of whether the meditation timer has ended
   const [isEnded, setIsEnded] = useState(false);

   //--Pei To toggle between playing or pausing the meditation timer
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

   //--Pei hit the gong when session has ended.
   const playSound = () => { 
      if (!isEnded) { 
         hitGong(); 
         setTimeInSec(true); 
         reset();
      } 
   };


   useEffect( () => {

      let interval = null;

      //--Pei when time is up!
      if (timeInSec <= 0) {
         setIsActive(false);
         playSound();
      };

      //--Pei setinterval to reduce time by 1 second
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

      <div className="meditateContainer">
         <h2>
            Breath Meditation
         </h2>
         <h4>
            As the blob swells, breathe in and <br/>
            then breathe out as it contracts.
         </h4>

         <div className="blobContainer">
            <div className={`blobbly-blob ${isActive ? 'blobbly-blob-swell' : ''}`}>
            </div>
         </div>

         <div className="timerCount">
            <p>
               {(Math.floor(timeInSec / 60))}:{timePadding(timeInSec % 60, 2)}
            </p>
         </div>

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

   // End of Return  
   );
};

