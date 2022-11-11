import React from "react";
import CartIcon from "../../components/CartIcon";
import list from "../../assets/img/list.svg";
import Carrousel from "../../components/product/carrousel/Carrousel";

function HomeProducts() {
  return (
    <div className={"homeproducts"}>
      <div className='hp-title'>
        <div className='hp-title-item1'>nuestros</div>
        <div className='hp-title-item2'>productos</div>
      </div>

      <Carrousel />

      <div className='hp-footer'>
        <a href='/products' className='hp-footer-item hp-footer-item1'>
          <img src={list} alt='list' /> ver todos
        </a>
        <a href='/cart' className='hp-footer-item hp-footer-item2'>
          <CartIcon /> ir al carrito
        </a>
      </div>
    </div>
  );
}

export default HomeProducts;
