import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton(props) {
  return (
    <Button className={props.style} href={props.link}>
      {props.name}
    </Button>
  );
}
