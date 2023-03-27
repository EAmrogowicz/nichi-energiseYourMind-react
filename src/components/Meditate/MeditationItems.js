import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AirIcon from '@mui/icons-material/Air';


export const MeditationItems = [
  {
    meditation: "Breathing",
    icon: AirIcon,
    meditationImg:
      "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    suitableMood: ["Happy", "Good", "OK", "Sad", "Awful"],
  },
  {
    meditation: "SpotLighting",
    icon: SettingsAccessibilityIcon,
    meditationImg:
      "https://images.unsplash.com/photo-1602144564887-e2be90e0ab11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    suitableMood: ["Good", "Sad", "Awful"],
  },
  {
    meditation: "Reflection",
    icon: PsychologyIcon,
    meditationImg:
      "https://images.unsplash.com/photo-1601779144646-5e6a43c5d615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGl0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    suitableMood: ["Happy", "Neutral", "OK", "Sad"],
  },
];
