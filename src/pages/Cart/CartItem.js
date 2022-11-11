import React from "react";
import formatter from "../../utilities/numbersFormatter";
import removeIcon from "../../assets/img/remove.svg";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { updateQty } from "../../redux";

function CartItem({ productInfo, deleteItem, updateQty }) {
  const { _id } = productInfo;
  const [qtyValue, setQtyValue] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [hideCartItem, setHideCartItem] = useState(false);

  // setSubtotal
  useEffect(() => {
    setQtyValue(productInfo.qty);
    setSubtotal(qtyValue * productInfo.price);
  }, [qtyValue, productInfo.price, productInfo.qty]);

  const qtyChange = e => {
    let qty = e.target.value;

    setQtyValue(qty);
    updateQty({ _id, qty });
  };

  const qtyBlur = e => {
    const qty = 1;

    if (qtyValue < 1) {
      setQtyValue(qty);
      updateQty({ _id, qty });
    }
  };

  const deleteThisItem = () => {
    setHideCartItem(true);

    setTimeout(() => {
      deleteItem(_id);
    }, 500);
  };

  return (
    <div className={`cartitem ${hideCartItem && "hideCartItem"}`}>
      <div className='cartitem-row'>
        <div className='itemname'>{productInfo.title}</div>

        <div className='cartitem-row-bit'>
          <img
            src={removeIcon}
            alt=''
            className='remove-icon'
            onClick={deleteThisItem}
          />
        </div>
      </div>

      <div className='cartitem-row'>
        <div className='cartitem-row-bit'>
          <input
            type='number'
            name='qty'
            id='qty'
            min={1}
            className='qty'
            onChange={qtyChange}
            onBlur={qtyBlur}
            value={qtyValue}
          />
          <label htmlFor=''>Cantidad</label>
        </div>

        <div className='cartitem-row-bit'>
          <div className='currency'>{formatter.format(productInfo.price)}</div>
          <label htmlFor=''>Precio</label>
        </div>

        <div className='cartitem-row-bit'>
          <div className='currency'>{formatter.format(subtotal)}</div>
          <label htmlFor=''>Subtotal</label>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateQty: qty => dispatch(updateQty(qty))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
