import IconButton from "@mui/material/IconButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function IconBtn() {
  return (
    <IconButton
      className="btnRound"
      aria-label="upload picture"
      component="label"
    >
      <input hidden accept="image/*" type="file" />
      <ArrowBackRoundedIcon />
    </IconButton>
  );
}
