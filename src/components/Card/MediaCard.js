import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function MediaCard({ imageUrl, imageAlt, title, description }) {
  return (
    <Card sx={{ maxWidth: 345, position: "relative", margin: "auto" }}>
      <CardMedia
        sx={{ height: "250px", width: "100%" }}
        image={imageUrl}
        title={imageAlt}
      />
      <CardContent sx={{ position: "absolute", bottom: "0" }}>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
