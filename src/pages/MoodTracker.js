import { useState } from "react";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import PageContainer from "../components/PageContainer";
import MoodPrompt from "../components/Mood/MoodPrompt";
import MoodSelect from "../components/Mood/MoodSelect";

export default function MoodTracker() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [existingMoodData, setExistingMoodData] = useState(userData.mood || []);
  const [submitted, setSubmitted] = useState(false);

  const moods = [
    { icon: SentimentVerySatisfiedOutlinedIcon, description: "Happy" },
    { icon: SentimentSatisfiedAltOutlinedIcon, description: "Good" },
    { icon: SentimentSatisfiedIcon, description: "OK" },
    { icon: SentimentNeutralOutlinedIcon, description: "Neutral" },
    { icon: SentimentDissatisfiedOutlinedIcon, description: "Sad" },
    { icon: SentimentVeryDissatisfiedOutlinedIcon, description: "Awful" },
  ];

  function handleMoodSubmit(moodRecord) {
    const updatedMoodData = [...existingMoodData, moodRecord];
    setExistingMoodData(updatedMoodData);
    userData.mood = updatedMoodData;
    localStorage.setItem("userData", JSON.stringify(userData));
    setSubmitted(true);
  }

  return (
    <PageContainer>
      {submitted ? (
        <MoodSelect
          moods={moods}
          moodRecord={existingMoodData[existingMoodData.length - 1]}
        />
      ) : (
        <MoodPrompt moods={moods} onSubmit={handleMoodSubmit} />
      )}
    </PageContainer>
  );
}
