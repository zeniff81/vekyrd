import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import icon from "../../assets/img/cart-white.svg";

export const CartWidget = ({ cart }) => {
  const [count, setCount] = useState(0);
  const [animateCount, setAnimateCount] = useState("");

  // Cart icon animation
  useEffect(() => {
    setAnimateCount("animateCount");
    setTimeout(() => {
      setAnimateCount("");
    }, 1000);

    if (typeof cart.items !== "undefined") setCount(cart.items.length);
  }, [cart.items]);

  return (
    <Link to='/cart' className='cartwidget'>
      <div className={`count ${animateCount}`}>{count}</div>
      <img src={icon} alt='icono del carrito' />
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer,
    user: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget);
