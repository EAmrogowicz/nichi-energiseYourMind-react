import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function IconBtn() {
  return (
    <IconButton
      className="btnRound"
      aria-label="upload picture"
      component="label"
    >
      <input hidden accept="image/*" type="file" />
      <ArrowBackIcon />
    </IconButton>
  );
}
