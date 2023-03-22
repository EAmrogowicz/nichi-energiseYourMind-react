import React from 'react'
import meditateBreath from '../components/meditateBreath';
import '../css/style_meditate.css';

export default function Meditation() {
   return (
      <>
      <div className="meditate">
         <div className="meditateContainer">
            <Timer />
         </div>
      </div>
      </>
   )
}
