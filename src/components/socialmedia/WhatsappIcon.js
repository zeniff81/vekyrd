import React from "react";
import whatsappIcon from "../../assets/img/whatsapp-white.svg";

function WhatsappIcon() {
  return (
    <div className='whatsappicon'>
      {/* WhatsApp icon */}
      <a
        href='https://wa.me/18098025648'
        className='whatsapp_float'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={whatsappIcon} alt='whatsapp' className='whatsapp-icon' />
      </a>
    </div>
  );
}

export default WhatsappIcon;
