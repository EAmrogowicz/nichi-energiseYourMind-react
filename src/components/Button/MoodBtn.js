import IconButton from "@mui/material/IconButton";

export default function MoodBtn({ children, className }) {
  return (
    <IconButton className={`btn moodBtn ${className}`}>{children}</IconButton>
  );
}
