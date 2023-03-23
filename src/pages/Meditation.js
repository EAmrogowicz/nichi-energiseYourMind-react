import React from 'react'
import MeditateBreath from '../components/MeditateBreath';
import '../css/style_meditate.css';

export default function Meditation() {
   return (
      <>
      <div className="meditate">
         <div className="meditateContainer">
            <MeditateBreath />
         </div>
      </div>
      </>
   )
}
