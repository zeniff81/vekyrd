import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { removeFromCart, clearCart } from "../../redux";
import CartItem from "./CartItem";
import arrowWhite from "../../assets/img/arrow_white.svg";
import arrowBlue from "../../assets/img/arrow.svg";
import toldo from "../../assets/img/toldo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import formatter from "../../utilities/numbersFormatter";
import {
  loadScrollPosition,
  saveScrollPosition
} from "../../utilities/manageScrollPosition";

function Cart({ cartReducer, removeFromCart, clearCart }) {
  const [products, setProducts] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { items, discountPercentage, discountAbsolute } = cartReducer;

  useEffect(() => {
    loadScrollPosition("cart");
    return () => {
      saveScrollPosition("cart");
    };
  }, []);

  // setCartEmpty
  useEffect(() => {
    setProducts(items);
    setCartEmpty(items.length === 0);
  }, [items]);

  // setSubtotal
  useEffect(() => {
    const newSubtotal = items.reduce((prev, current) => {
      const thisItemPrice = current.price * current.qty;
      return prev + thisItemPrice;
    }, 0);

    setSubtotal(newSubtotal);
  }, [items]);

  // setTotal
  useEffect(() => {
    const newDiscountPercentage = subtotal * discountPercentage;
    const newTotal = subtotal - newDiscountPercentage - discountAbsolute;
    setTotal(newTotal);
  }, [discountPercentage, discountAbsolute, cartReducer, subtotal]);

  const deleteItem = _id => {
    removeFromCart(_id);
  };

  return (
    <div className='cart'>
      <div className='title'>Pedido</div>
      <div className='items'>
        {products.map(item => {
          return (
            <CartItem
              key={item._id}
              productInfo={item}
              deleteItem={deleteItem}
            />
          );
        })}

        {cartEmpty && (
          <>
            <h3>Su carrito está vacío. Por favor, agrege productos.</h3>
            <div className='btn btn-primary btn-more-products'>
              <img src={arrowBlue} alt='' />
              <Link to='/products'>
                <span>Más productos </span>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={`summary`}>
        <img src={toldo} alt='imagen toldo' className='toldo' />
        <div className='row line-bottom'>
          <div className='label'>Subtotal</div>
          <div className='subtotal'>{formatter.format(subtotal)}</div>
        </div>

        <div className='row line-bottom'>
          <div className='label'>Descuento</div>
          <div className='subtotal'>{formatter.format(discountAbsolute)}</div>
        </div>

        <div className='row'>
          <div className='label'>
            <b>Total</b>
          </div>
          <div className='total'>
            <b>{formatter.format(total)}</b>
          </div>
        </div>

        <div className='promo-code'>
          <h4>¿Tienes un código promocional?</h4>
          <input type='text' />
          <p className='info'>
            Con un <b>código promocional</b> obtienes increibles descuentos en
            tu compra. <Link to='/contactus'>Contáctanos AQUI</Link> para saber
            más.
          </p>
        </div>
      </div>

      {/* actions */}
      <div className='actions'>
        <Link to='/products'>
          <div className='btn btn-primary actions-btn btn-more-products'>
            <img src={arrowBlue} alt='' />
            <div>Más productos </div>
          </div>
        </Link>

        {!cartEmpty && (
          <Link to='/orderconfirmation'>
            <div className='btn btn-primary actions-btn btn-purchase'>
              <div>Hacer pedido </div>
              <img src={arrowWhite} alt='' />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: _id => dispatch(removeFromCart(_id)),
    clearCart: () => dispatch(clearCart())
  };
};

const mapStateToProps = state => {
  return {
    cartReducer: state.cartReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
