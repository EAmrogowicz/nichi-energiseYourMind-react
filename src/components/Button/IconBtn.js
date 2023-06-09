import IconButton from "@mui/material/IconButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function IconBtn() {
  return (
    <IconButton className='btn btnRound' aria-label='go back'>
      <ArrowBackRoundedIcon />
    </IconButton>
  );
}
