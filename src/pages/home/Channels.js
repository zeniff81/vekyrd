import React from "react";
import phone from "../../assets/img/phone-blue.svg";
import email from "../../assets/img/email-blue.svg";
import whatsapp from "../../assets/img/whatsapp-blue.svg";
import instagram from "../../assets/img/instagram-blue.svg";
import facebook from "../../assets/img/facebook-blue.svg";

function Channels() {
  return (
    <div className='channels'>
      <div className='title'>canales</div>
      <div className='items'>
        <div className='channel'>
          <div className='channel-img'>
            <img src={phone} alt='' />
          </div>
          <div className='channel-data'>809-983-7518</div>
        </div>
        <div className='channel'>
          <div className='channel-img'>
            <img src={email} alt='' />
          </div>
          <div className='channel-data'>vekyrd@gmail.com</div>
        </div>
        <div className='channel'>
          <div className='channel-img'>
            <img src={whatsapp} alt='' />
          </div>
          <div className='channel-data'>809-983-7518</div>
        </div>
        <div className='channel'>
          <div className='channel-img'>
            <img src={instagram} alt='' />
          </div>
          <div className='channel-data'>vekyrd</div>
        </div>
        <div className='channel'>
          <div className='channel-img'>
            <img src={facebook} alt='' />
          </div>
          <div className='channel-data'>vekyrd</div>
        </div>
      </div>
    </div>
  );
}

export default Channels;
