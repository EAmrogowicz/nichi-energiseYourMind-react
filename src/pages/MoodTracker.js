import { useState } from "react";
import PageContainer from "../components/PageContainer";
import MoodPrompt from "../components/Mood/MoodPrompt";
import MoodSelect from "../components/Mood/MoodSelect";

export default function MoodTracker() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [existingMoodData, setExistingMoodData] = useState(userData.mood || []);
  const [submitted, setSubmitted] = useState(false);

  function handleMoodSubmit(moodRecord) {
    const updatedMoodData = [...existingMoodData, moodRecord];
    setExistingMoodData(updatedMoodData);
    userData.mood = updatedMoodData;
    localStorage.setItem("userData", JSON.stringify(userData));
    setSubmitted(true);
  }

  return (
    <PageContainer size='md'>
      {submitted ? (
        <MoodSelect
          moodRecord={existingMoodData[existingMoodData.length - 1]}
        />
      ) : (
        <MoodPrompt onSubmit={handleMoodSubmit} />
      )}
    </PageContainer>
  );
}
