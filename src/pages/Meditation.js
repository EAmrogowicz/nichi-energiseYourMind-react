import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";
import MeditationPrompt from "../components/Meditate/MeditationPrompt";
import MeditateSelect from "../components/Meditate/MeditateSelect";
import { MeditationItems } from "../components/Meditate/MeditationItems";

export default function Meditation() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [existingMeditationData, setExistingMeditationData] = useState(
    userData.meditation || []
  );
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const meditationSelected = location.state?.meditationSelected;

  function handleMeditationSubmit(e) {
    // const updatedMeditationData = [...existingMeditationData, meditationRecord];
    // setExistingMeditationData(updatedMeditationData);
    // userData.meditation = updatedMeditationData;
    // localStorage.setItem("userData", JSON.stringify(userData));
    console.log(e.target.value);
    setSubmitted(true);
  }

  return (
    <PageContainer size='md'>
      {submitted || meditationSelected ? (
        <MotionPage>
          <MeditateSelect
            meditations={MeditationItems}
            meditationRecord={
              existingMeditationData[existingMeditationData.length - 1]
            }
          />
        </MotionPage>
      ) : (
        <MotionPage>
          <MeditationPrompt
            meditations={MeditationItems}
            onSubmit={handleMeditationSubmit}
          />
        </MotionPage>
      )}
    </PageContainer>
  );
}
