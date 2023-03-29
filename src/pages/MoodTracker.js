import { useState } from "react";
import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";
import MoodPrompt from "../components/Mood/MoodPrompt";
import MoodSelect from "../components/Mood/MoodSelect";

export default function MoodTracker() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [existingMoodData, setExistingMoodData] = useState(
    userData?.mood || []
  );
  const [submitted, setSubmitted] = useState(false);

  // pass as prop to prompt and get back moodRecord data to submit
  function handleMoodSubmit(moodRecord) {
    // add data instead of overriding mood record
    const updatedMoodData = [...existingMoodData, moodRecord];
    setExistingMoodData(updatedMoodData);
    userData.mood = updatedMoodData;
    localStorage.setItem("userData", JSON.stringify(userData));
    setSubmitted(true);
  }

  return (
    <PageContainer size='md'>
      {submitted ? (
        <MotionPage>
          <MoodSelect
            // extract last recorded mood in the localStorage and pass to mood select page to display
            moodRecord={existingMoodData[existingMoodData.length - 1]}
          />
        </MotionPage>
      ) : (
        <MotionPage>
          <MoodPrompt onSubmit={handleMoodSubmit} />
        </MotionPage>
      )}
    </PageContainer>
  );
}
