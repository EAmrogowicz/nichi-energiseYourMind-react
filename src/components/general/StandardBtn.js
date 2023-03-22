import React from "react";
import Button from "@mui/material/Button";

export default function StandardBtn(props) {
  return (
    <Button className={props.classCss} href={props.link}>
      {props.name}
    </Button>
  );
}
