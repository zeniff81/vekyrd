import React, { useState } from "react";
import dummy from "../../assets/img/dummy.png";
import cart from "../../assets/img/cart.svg";

function ProductV2() {
  const [visible, setVisible] = useState(false);

  const closeActions = (event, value) => {
    event.stopPropagation();
    setVisible(value);
  };
  return (
    <div className='productv2'>
      <div className='img-container' onClick={(e) => closeActions(e, true)}>
        <img className='image' src={dummy} alt='product' />
      </div>
      <div className='details'>
        <div className='description'>Gotero Anti-Caídas</div>
        <div className='details-row'>
          <div className='weight'>35.8oz</div>
          <div className='price'>$350.00</div>
        </div>
      </div>
      {visible && (
        <div className='actions'>
          <div className='actions-description'>Gotero Anti-Caída</div>
          <div className='action-item1'>
            <a className='btn btn-white' href='http://www.google.com'>
              añadir <img src={cart} alt='' />
            </a>
          </div>
          <div className='action-item2'>
            <a className='btn btn-white' href='/'>
              detalles
            </a>
          </div>
          <a
            href='/'
            className='actions-close'
            actionvisible={false}
            onClick={(e) => closeActions(e, false)}
          >
            X
          </a>
        </div>
      )}
    </div>
  );
}

export default ProductV2;
