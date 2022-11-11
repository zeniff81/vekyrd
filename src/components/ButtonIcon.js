import React from "react";

export const ButtonIcon = ({ img, caption, className = "btn btn-primary" }) => {
  return (
    <div className={`buttonicon ${className}`}>
      <img src={img} alt='' />
      <div>{caption}</div>
    </div>
  );
};
