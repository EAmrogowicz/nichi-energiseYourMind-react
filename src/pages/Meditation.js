import React from "react";
import MeditateBreathing from "../components/MeditateBreathing/MeditateBreathing.js";
import MeditateBodyScan from "../components/MeditateBodyScan/MeditateBodyScan.js";
import MeditateReflect from "../components/MeditateReflect/MeditateReflect.js";


export default function Meditation() {
  return (
    <>
      <div className="meditate">
        <div className="meditateContainer">
          <MeditateBreathing />
          {/* <MeditateReflect /> */}
          {/* <MeditateBodyScan /> */}
        </div>
      </div>
    </>
  );
}
