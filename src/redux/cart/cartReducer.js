import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_QTY,
  FETCH_CART_FAILURE,
  FETCH_CART_SUCCESS,
  FETCH_CART_REQUEST
} from "./cartTypes";

const initialState = {
  discountPercentage: 0,
  discountAbsolute: 0,
  loading: false,
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { items } = state;
      const { payload } = action;

      return {
        ...state,
        items: [
          ...items,
          {
            ...payload,
            qty: 1
          }
        ]
      };

    case REMOVE_FROM_CART:
      const filtered = [];

      state.items.forEach(item => {
        if (item._id !== action.payload) filtered.push(item);
      });

      return {
        ...state,
        items: filtered
      };

    case UPDATE_QTY:
      const newItems = state.items.map(item => {
        if (item._id === action.payload._id) {
          const modified = {
            ...item,
            qty: action.payload.qty
          };
          return modified;
        } else {
          return item;
        }
      });

      return {
        ...state,
        items: newItems
      };

    case CLEAR_CART:
      return {
        ...state,
        items: []
      };

    case FETCH_CART_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_CART_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false
      };

    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default cartReducer;
