import { Card, CardContent, Typography, CardActions } from "@mui/material";
import StandardBtn from "../Button/StandardBtn";

export default function StandardCard({ title, description, buttonText }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <StandardBtn name={buttonText} />
      </CardActions>
    </Card>
  );
}
