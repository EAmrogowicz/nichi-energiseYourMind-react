import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AirIcon from "@mui/icons-material/Air";

export const MeditationItems = [
  {
    icon: AirIcon,
    meditation: "Breathing",
    description: "Breathing",
    meditationImg:
      "https://images.unsplash.com/photo-1585185160068-8175b6a39d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    suitableMood: ["Happy", "Good", "OK", "Sad", "Awful"],
  },
  {
    icon: SettingsAccessibilityIcon,
    meditation: "SpotLighting",
    description: "Spotlighting",
    meditationImg:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    suitableMood: ["Good", "Sad", "Awful"],
  },
  {
    icon: PsychologyIcon,
    meditation: "Reflection",
    description: "Reflection",
    meditationImg:
      "https://images.unsplash.com/photo-1586010339640-0cee8a975977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    suitableMood: ["Happy", "Neutral", "OK", "Sad"],
  },
];
