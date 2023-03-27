import { Grid, Stack } from "@mui/material";
import Heading5 from "../Typography/Heading5";
import ParagraphLg from "../Typography/ParagraphLg";
import MoodIcon from "./MoodIcon";

export default function MoodGrid({ icon, desc, time, notes, type, ...props }) {
  const Icon = icon;
  return (
    <Grid
      container
      columns={12}
      key={props.key}
      sx={{ minWidth: "40vw", maxWidth: "80vw" }}>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          alignItems: "top",
        }}>
        <MoodIcon iconboxsize={props.iconboxsize}>
          <Icon
            edge='center'
            color='inherit'
            sx={{
              width: props.iconsize ?? "3rem",
              height: props.iconsize ?? "3rem",
            }}
          />
        </MoodIcon>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Stack>
          {type && <ParagraphLg text={type} />}
          {desc && <Heading5 text={desc} />}
          {time && <ParagraphLg text={time} />}
          {notes && <ParagraphLg text={notes} />}
        </Stack>
      </Grid>
    </Grid>
  );
}
