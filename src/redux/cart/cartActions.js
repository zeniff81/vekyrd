import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_QTY,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE
} from "./cartTypes";

import axios from "axios";
import { SERVER_URL } from "../../environments";

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  };
};

export const removeFromCart = payload => {
  return {
    type: REMOVE_FROM_CART,
    payload
  };
};

export const updateQty = payload => {
  return {
    type: UPDATE_QTY,
    payload
  };
};

export const clearCart = () => {
  console.log("remove from cart....");
  return {
    type: CLEAR_CART
  };
};

// fetch cart

const fetchCartRequest = payload => {
  return {
    type: FETCH_CART_REQUEST
  };
};

const fetchCartSuccess = payload => {
  return {
    type: FETCH_CART_SUCCESS,
    payload
  };
};
const fetchCartFailure = payload => {
  return {
    type: FETCH_CART_FAILURE,
    payload
  };
};

export const fetchCart = _id => {
  return function (dispatch) {
    dispatch(fetchCartRequest());

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    axios
      .post(
        `${SERVER_URL}/api/auth/fetchlocalstorageitems`,
        {
          _id
        },
        config
      )
      .then(response => {
        const items = response.data.items;

        localStorage.setItem("items", JSON.stringify(items));
        dispatch(fetchCartSuccess({ items }));
      })
      .catch(error => {
        dispatch(fetchCartFailure(error));
      });
  };
};
