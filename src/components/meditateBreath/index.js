import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { FaPlay, FaPause, FaUndo, FaMusic } from 'react-icons/fa';

import './style.css';

import gongBell from './audio/gong1.mp3';


export default function meditateBreath () {

   const zeroPad = (num, places) => String(num).padStart(places, '0');

   function timePadding (num, padding) {
      let numString = (num).toString().padStart(padding, '0');
      return numString;
   }

   const startTime = 60;

   const [play] = useSound(gongBell);

   const [timerFinished, setTimerFinished] = useState(false);

   const [timeInSec, setTimeInSec] = useState(startTime);

   const [isActive, setIsActive] = useState(false);

   const toggle = () => { 
      setIsActive(!isActive); 
      setTimerFinished(false); 
   };

   const reset = () => { 
      setTimeInSec(startTime); 
      setIsActive(false); 
      setTimerFinished(false); 
   };

   const playSound = () => { 
      if (!timerFinished) { 
      play(); setTimeInSec(true); 
      } 
   };

   function setDuration (numSeconds) {
      let durationInSec = Math.max(0, numSeconds);
      return durationInSec;
   }

   useEffect( () => {

      let interval = null;

      if (timeInSec <= 0) {
         setIsActive(false);
         playSound();
      }

      if (isActive) {
         interval = setInterval(() => {
            setTimeInSec((s) => s - 1);
         }, 1000);
      } else if (!isActive && timeInSec !== 0) {
         clearInterval(interval);
      }

      return () => clearInterval(interval);

      }
      , [isActive, timeInSec, playSound]
   );

   return (
      <div className="meditateContainer">
         <h2>blah</h2>
         <h3>blah h2</h3>
         <div className="blobContainer">
            <div className={`blobly-blob ${isActive ? 'blobly-blob-expand' : ''}`}>
            </div>
         </div>
      <div className="timerCount">
         {(Math.floor(timeInSec / 60))}:{timePadding(timeInSec % 60, 2)}
      </div>

      <div className="row">
         <button className='circle-button button-primary-inactive' onClick={() => setTimeInSec(600)}>
            10min
         </button>

         <button className='circle-button button-primary-inactive' onClick={() => setTimeInSec(300)}>
            5min
         </button>

         <button className='circle-button button-primary-inactive' onClick={() => setTimeInSec(120)}>
            2min
         </button>

         <button className='circle-button button-primary-inactive' onClick={() => setTimeInSec(60)}>
            1min
         </button>
      </div>

      <div className='row'>
         <button className={`circle-button button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive
               ? <FaPause />
               : <FaPlay />}

         </button>
         
         <button className='circle-button button-primary-inactive' onClick={reset}>
            <FaUndo />

         </button>
         <button className='circle-button button-primary-inactive' onClick={() => play()}>
            <FaMusic />

         </button>
      <div />
      </div>
      </div>
   );
};

