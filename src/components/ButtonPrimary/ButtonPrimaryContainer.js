import React from "react";

function ButtonPrimaryContainer({ children, onClick, icon }) {
  return (
    <button className='buttonprimary btn btn-primary' onClick={onClick}>
      <img src={icon} alt='' width={30} />
      {children}
    </button>
  );
}

export default ButtonPrimaryContainer;
