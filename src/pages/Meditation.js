import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";

import MeditationPrompt from "../components/Meditate/MeditationPrompt";
import { MeditationItems } from "../components/Meditate/MeditationItems";

export default function Meditation() {
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const [existingMeditationData, setExistingMeditationData] = useState(
  //   userData.meditation || []
  // );
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  
  function handleMeditationSubmit(e) {
    setSubmitted(true);
  }

  return (
    <PageContainer size='md'>
        <MotionPage>
          <MeditationPrompt
            meditations={MeditationItems}
            onSubmit={handleMeditationSubmit}
          />
        </MotionPage>
    </PageContainer>
  );
}
