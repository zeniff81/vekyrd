import React from "react";
import ProductV2 from "../ProductV2";
import CarrouselArrow from "./CarrouselArrow";

function Carrousel() {
  return (
    <div className='carrousel'>
      <CarrouselArrow rotation={-90} scale={2} />
      <div className='content'>
        <ProductV2 />
        <ProductV2 />
        <ProductV2 />
        <ProductV2 />
      </div>
      <CarrouselArrow rotation={90} scale={2} />
    </div>
  );
}

export default Carrousel;
