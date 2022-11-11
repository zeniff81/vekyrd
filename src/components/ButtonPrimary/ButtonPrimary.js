import React from "react";
import ButtonPrimaryContainer from "./ButtonPrimaryContainer";

function ButtonPrimary({ children, onClick, icon }) {
  return (
    <ButtonPrimaryContainer onClick={onClick} icon={icon}>
      {children}
    </ButtonPrimaryContainer>
  );
}

export default ButtonPrimary;
