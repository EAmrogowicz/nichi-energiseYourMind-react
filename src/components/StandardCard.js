import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Heading5 from "./Typography/Heading5";
import ParagraphLg from "./Typography/ParagraphLg";

export default function StandardCard({
  classCss,
  classCssIn,
  height,
  title,
  caption,
  imglink,
  address,
  onClick,
}) {
  return (
    <Card
      sx={{ maxWidth: 620, minWidth: " 100% " }}
      className={classCss}
      onClick={onClick}>
      <CardActionArea component={RouterLink} to={address}>
        <CardMedia
          component='img'
          height={height}
          image={imglink}
          alt={title}
        />
        <CardContent className={classCssIn}>
          <Heading5 text={title} classCss={"m-bottom"} />
          <ParagraphLg text={caption}></ParagraphLg>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
