import React, { useState } from "react";
import flipIcon from "../../assets/img/flip.svg";
import CatalogItem from "./CatalogItem";
import CatalogItemBack from "./CatalogItemBack";

export const CardFlipper = ({ productInfo }) => {
  const [flipped, setFlipped] = useState(false);
  const [hideFront, setHideFront] = useState(false);

  const flip = () => {
    setFlipped(!flipped);

    setTimeout(() => {
      setHideFront(!hideFront);
    }, 300);

    setTimeout(() => {
      if (!getFlippedStatus()) {
        setFlipped(false);
        setHideFront(false);
      }
    }, 10000);
  };

  const getFlippedStatus = () => {
    return flipped;
  };

  const styles = {
    cardContainer: {
      transform: `rotateY(${flipped ? 180 : 0}deg)`
    },
    back: {
      opacity: flipped ? "1" : "0",
      display: hideFront ? "block" : "none"
    },
    front: {
      opacity: flipped ? "0" : "1",
      //zIndex: flipped ? "-1" : "0",
      display: hideFront ? "none" : "block"
    },

    flipIcon: {
      opacity: flipped ? "0" : "1"
    }
  };

  return (
    <div className='cardflipper'>
      <div className='card-container' style={styles.cardContainer}>
        {hideFront && (
          <div className='back' onClick={flip} style={styles.back}>
            <CatalogItemBack
              className={`${flipped ? "back-visible" : ""}`}
              productInfo={productInfo}
            />
          </div>
        )}
        <div className='front' style={styles.front}>
          <CatalogItem productInfo={productInfo} />
        </div>
      </div>
      <img
        alt='icono rotar tarjeta'
        className='flipIcon'
        onClick={flip}
        src={flipIcon}
        style={styles.flipIcon}
      />
    </div>
  );
};
export default CardFlipper;
