import React from "react";
import Burger from "../menu/Burger";
import Menu from "../menu/Menu";
import SocialMedia from "../socialmedia/SocialMedia";

function Header() {
  return (
    <div className='header'>
      <Burger />
      <Menu />
      <SocialMedia />
    </div>
  );
}

export default Header;
