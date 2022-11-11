import React, { useState } from "react";
import { useHistory } from "react-router";
import icon from "../../assets/img/cart-white.svg";
import tick from "../../assets/img/tick.svg";
import { updateProductDetails } from "../../redux";
import { addToCart } from "../../redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import { itemExists } from "../../utilities/ifItemExists";

function CatalogItem({ productInfo, updateProductDetails, addToCart, cart }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupClass, setPopupClass] = useState("");
  const [tickWidth, setTickWidth] = useState("0");

  useEffect(() => {
    if (itemExists(productInfo._id) > -1) setTickWidth("1rem");
  }, [cart, productInfo._id]);

  useEffect(() => {
    //clean animate popup
    let popupTimeout;

    if (showPopup) {
      setPopupClass("showPopup");

      popupTimeout = setTimeout(() => {
        setPopupClass("");
        setShowPopup(false);
      }, 4000);
    }

    return () => {
      clearTimeout(popupTimeout);
    };
  }, [showPopup, setPopupClass]);

  const history = useHistory();

  const openDetails = () => {
    console.log(`CatalogItem - productInfo`, productInfo);
    updateProductDetails(productInfo);
    history.push({
      pathname: "/productdetails",
      state: {
        prevScroll: document.documentElement.scrollTop
      }
    });
  };

  const addItemToCart = () => {
    // animate popup
    setShowPopup(true);

    //do nothing if already exists
    if (itemExists(productInfo._id, cart) > -1) return;

    addToCart(productInfo);
    localStorage.setItem("items", JSON.stringify(cart.items));
  };

  return (
    <div className='catalogitem'>
      <div></div>
      {/* image */}
      <img
        src={productInfo.image}
        alt=''
        className='image'
        onClick={openDetails}
      />

      {/* item index */}
      <div className='index'>
        {productInfo.title.substring(0, 2) + productInfo._id.substring(20, 24)}
      </div>

      {/* details */}
      <div className='details'>
        {/* info */}
        <div className='info'>
          <div className='info-title'>
            <div className='title'>{productInfo.title}</div>
          </div>
          <div className='info-weight'>
            <div className='weight'>{productInfo.weight}oz</div>
          </div>
          <div className='info-description'>
            <div className='description'>{productInfo.description}</div>
          </div>
        </div>
        {/* info */}

        <div className='price'>${productInfo.price}</div>
        <div className='btn btn-add-cart' onClick={addItemToCart}>
          <div className='caption'>Añadir</div>
          <img src={icon} alt='icono carrito' className='cart-icon' />
          <img
            src={tick}
            alt='cotejo'
            className='tick-icon'
            style={{ width: `${tickWidth}` }}
          />
          <div className={`popup ${popupClass}`}>agregado</div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateProductDetails: payload => dispatch(updateProductDetails(payload)),
    addToCart: payload => dispatch(addToCart(payload))
  };
};
const mapStateToProps = state => {
  return {
    cart: state.cartReducer
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
