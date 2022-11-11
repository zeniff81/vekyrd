import { UPDATE_PRODUCT_DETAILS } from "./productDetailsTypes";

const initialState = {
  productInfo: {}
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_DETAILS:
      return {
        ...state,
        productInfo: action.payload
      };

    default:
      return state;
  }
};

export default productDetailsReducer;
