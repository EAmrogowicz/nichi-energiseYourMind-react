import { Grid, Stack } from "@mui/material";
import ParagraphLg from "../Typography/ParagraphLg";
import MoodIcon from "./MoodIcon";

export default function MoodGrid({ icon, desc, time, ...props }) {
  const Icon = icon;
  return (
    <Grid container columns={12} key={props.key}>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          alignItems: "center",
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
        xs={8}
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Stack>
          {desc && <ParagraphLg text={desc} />}
          {time && <ParagraphLg text={time} />}
        </Stack>
      </Grid>
    </Grid>
  );
}
