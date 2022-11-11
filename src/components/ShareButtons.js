import React from "react";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import whatsapp from "../assets/img/whatsapp.svg";

export const ShareButtons = () => {
  return (
    <div className='sharebuttons'>
      <div className='buttons'>
        <img src={facebook} alt='facebook' />
        <img src={instagram} alt='instagram' />
        <img src={whatsapp} alt='whatsapp' />
      </div>
      <div className='label'>Compartir</div>
    </div>
  );
};
