import IconButton from "@mui/material/IconButton";

export default function MoodBtn({ children, className }) {
  return (
    <IconButton className={`btn btnRound moodBtn ${className}`}>
      {children}
    </IconButton>
  );
}
