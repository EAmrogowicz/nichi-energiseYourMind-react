import Typography from "@mui/material/Typography";

export default function PageTitle({ classCss, text }) {
  return (
    <Typography variant='h1' className={`page-title ${classCss}`}>
      {text}
    </Typography>
  );
}
