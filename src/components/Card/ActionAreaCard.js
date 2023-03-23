import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Heading5 from "../Typography/Heading5";
import ParagraphLg from "../Typography/ParagraphLg";

export default function ActionAreaCard({
  classCss,
  height,
  title,
  caption,
  imglink,
}) {
  return (
    <Card sx={{ maxWidth: 620, minWidth: 300 }} className={classCss}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={imglink}
          alt="meditate"
        />
        <CardContent>
          <Heading5 text={title} classCss={"m-bottom"} />
          <ParagraphLg text={caption}></ParagraphLg>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
