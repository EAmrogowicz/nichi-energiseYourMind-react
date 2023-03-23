import React from "react";
import MeditateBreath from "../components/MeditateBreath";
import "../components/MeditateBreath/styles.css";

export default function Meditation() {
  return (
    <>
      <div className="meditate">
        <div className="meditateContainer">
          <MeditateBreath />
        </div>
      </div>
    </>
  );
}
