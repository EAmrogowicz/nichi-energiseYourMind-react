import Typography from "@mui/material/Typography";

export default function SubHeading({ classCss, text }) {
  return (
    <Typography variant='h2' className={`page-subheading ${classCss}`}>
      {text}
    </Typography>
  );
}
