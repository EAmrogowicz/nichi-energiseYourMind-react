import Typography from "@mui/material/Typography";

export default function SubHeading({ classCss, text }) {
  return (
    <Typography variant="h5" className={`page-subheading ${classCss}`}>
      {text}
    </Typography>
  );
}
