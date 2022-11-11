import React, { useEffect, useState } from "react";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import instagramWhite from "../../assets/img/instagram-white.svg";
import facebookWhite from "../../assets/img/facebook-white.svg";

function SocialMedia({ color }) {
  const [facebookIcon, setFacebookIcon] = useState(facebook);
  const [instagramIcon, setInstagramIcon] = useState(instagram);

  useEffect(() => {
    if (color === "white") {
      setFacebookIcon(facebookWhite);
      setInstagramIcon(instagramWhite);
    }
  }, [color]);

  return (
    <div className='social-media'>
      <div className='sm-img-container'>
        <a
          href='https://www.instagram.com/vekyrd/?hl=es'
          rel='noreferrer'
          target='_blank'
        >
          <img src={instagramIcon} alt='instagram' />
        </a>
      </div>
      <div className='sm-img-container'>
        <a
          href='https://www.facebook.com/vekyrd-105276327649102'
          rel='noreferrer'
          target='_blank'
        >
          <img src={facebookIcon} alt='facebook' />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
