import React from "react";
import cart from "../assets/img/cart.svg";

function CartIcon() {
  return (
    <div className='carticon'>
      <div className='cart-count'>2</div>
      <img className='carticon-img' src={cart} alt='cart icon' />
    </div>
  );
}

export default CartIcon;
