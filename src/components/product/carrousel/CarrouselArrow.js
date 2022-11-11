import React, { useState } from "react";

function CarrouselArrow(props) {
  const [rotation] = useState(props.rotation);
  const [scale] = useState(props.scale);

  return (
    <div
      className='c-arrow'
      style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
    >
      <div className='c-arrow-item'></div>
    </div>
  );
}

export default CarrouselArrow;
