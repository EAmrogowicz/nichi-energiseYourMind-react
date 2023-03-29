import React, { useEffect, useState, useCallback } from "react";
import useSound from "use-sound";

import { Drawer, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import StandardBtn from "../../Button/StandardBtn";
import IconBtn from "../../Button/IconBtn";
import IconButton from "@mui/material/IconButton";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import SubHeading from "../../Typography/SubHeading";
import ParagraphLg from "../../Typography/ParagraphLg";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import TimerIcon from "@mui/icons-material/Timer";

import MeditationSuccess from "../MeditationSuccess";

import "./style.css";
import gongBell from "../audio/gong1.mp3";

export default function MeditateBreath() {
  //--PW (1) Local Storage for activity log
  //--PW  Get Data from local storage and set them into (default) state "existingMeditationData"

  const userData = JSON.parse(localStorage.getItem("userData"));

  const [existingMeditationData, setExistingMeditationData] = useState(
    userData.meditation || []
  );

  const addMeditationRecord = useCallback(() => {
    const meditationRecord = {
      type: "Meditation",
      description: "Breathing",
      time: new Date(),
    };
    const updatedMeditationData = [...existingMeditationData, meditationRecord];
    setExistingMeditationData(updatedMeditationData);
    userData.meditation = updatedMeditationData;
    localStorage.setItem("userData", JSON.stringify(userData));
    // console.log("userData", userData);
  }, [userData, existingMeditationData]);

  //--PW State for timer drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //--PW (2) Run the meditation process
  //--PW set the default meditation duration to 60s
  const startTime = 60;

  //--PW Play the gong
  const [hitGong] = useSound(gongBell);

  //--PW Function to display the time string
  function timePadding(num, padding) {
    let numString = num.toString().padStart(padding, "0");
    return numString;
  }

  const [timeInSec, setTimeInSec] = useState(startTime);

  //--PW Create the state of whether the meditation timer is currently running
  const [isActive, setIsActive] = useState(false);

  //--Pei Create the state of whether the meditation timer has ended
  const [isEnded, setIsEnded] = useState(false);

  //--PW To toggle between playing or pausing the meditation timer
  //--PW There are 2 ways to solve the React warning "Function makes the dependencies of useEffect Hook change on every render":
  //-- (Option 1) cannot move playPause() into useEffect as it is needed inside the JSX when playPause button is clicked
  //-- (Option 2) so instead wrap the playPause() function definition in a useCallback hook which will hopefully return a memoized function whose reference will only change if something in the hook's dependency array changes.

  const playPause = useCallback(() => {
    setIsActive(!isActive);
    setIsEnded(false);
    if (setIsActive) {
      hitGong();
    }
  }, [isActive, hitGong]);

  //--PW to reset the meditation session timer
  const reset = () => {
    setTimeInSec(startTime);
    setIsActive(false);
    setIsEnded(false);
  };

  //--PW hit the gong when session has ended.

  const playSound = useCallback(() => {
    if (!isEnded) {
      hitGong();
      setTimeInSec(true);
      addMeditationRecord();
      reset();
      setIsEnded(!isEnded);
    }
  }, [isEnded, hitGong, addMeditationRecord]);

  const handleClickSame = () => {
    setIsEnded(!isEnded);
  };

  useEffect(() => {
    let interval = null;

    //--PW when time is up!
    if (timeInSec <= 0) {
      setIsActive(false);
      playSound();
    }

    //--PW setinterval to reduce time by 1 second
    if (isActive) {
      interval = setInterval(() => {
        setTimeInSec((s) => s - 1);
      }, 1000);
    } else if (!isActive && timeInSec !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeInSec, playSound]);

  let timeString =
    Math.floor(timeInSec / 60) + `:` + timePadding(timeInSec % 60, 2);

  let paragraphText = `As the blob swells, breathe in and \n then breathe out as it contracts.`;

  return (
    <>
      {!isEnded ? (
        <div className='meditateContainer'>
          <SubHeading text='Breath Meditation' />
          <ParagraphLg text={paragraphText} />

          <div className='animeContainer'>
            <div
              className={`blobbly-blob ${
                isActive ? "blobbly-blob-swell" : ""
              }`}></div>
          </div>
          <Stack>
            <Box
              width={"100%"}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "0.2rem auto",
              }}>
              <div className='playPause' onClick={playPause}>
                {isActive ? (
                  <IconButton
                    className='btn btnRound btnSpacing'
                    aria-label='Pause'>
                    <PauseIcon fontSize='sm' />
                  </IconButton>
                ) : (
                  <IconButton
                    className='btn btnRound btnSpacing'
                    aria-label='Pause'>
                    <PlayArrowIcon fontSize='sm' />
                  </IconButton>
                )}
              </div>

              <IconButton
                className='btn btnRound btnSpacing'
                aria-label='timer menu'>
                <TimerIcon onClick={() => setIsDrawerOpen(true)} />
              </IconButton>

              <IconButton
                className='btn btnRound btnSpacing'
                aria-label='reset'>
                <RestartAltIcon onClick={reset} />
              </IconButton>
            </Box>

            <Box
              width={"100%"}
              sx={{
                margin: "1.2rem auto",
              }}>
              <SubHeading text={timeString} />
            </Box>

            <Box
              width={"100%"}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "0.2rem auto",
              }}>
              <Link to='/meditation'>
                <IconBtn />
              </Link>
            </Box>
          </Stack>

          <Drawer
            anchor='bottom'
            open={isDrawerOpen}
            onClick={() => setIsDrawerOpen(false)}>
            <Box
              className='drawer'
              width={"100%"}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "0.2rem auto",
              }}>
              <ButtonGroup variant='text' aria-label='button group'>
                <Button className='btnFont' onClick={() => setTimeInSec(2)}>
                  test
                </Button>
                <Button className='btnFont' onClick={() => setTimeInSec(60)}>
                  1min
                </Button>
                <Button className='btnFont' onClick={() => setTimeInSec(120)}>
                  2min
                </Button>
                <Button className='btnFont' onClick={() => setTimeInSec(300)}>
                  5min
                </Button>
                <Button className='btnFont' onClick={() => setTimeInSec(600)}>
                  10min
                </Button>
              </ButtonGroup>
            </Box>
          </Drawer>
        </div>
      ) : (
        <>
          <Stack>
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
                <StandardBtn
                  name={"Meditate Again"}
                  onClick={handleClickSame}
                />
              </Link>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
}
