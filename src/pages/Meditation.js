import React from "react";
import MeditateBreathing from "../components/MeditateBreathing";
import "../css/style_meditate.css";

export default function Meditation() {
  return (
    <>
      <div className="meditate">
        <div className="meditateContainer">
          <MeditateBreathing />
        </div>
      </div>
    </>
  );
}
