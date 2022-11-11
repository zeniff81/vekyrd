import { UPDATE_PRODUCT_DETAILS } from "./productDetailsTypes";

export const updateProductDetails = payload => {
  return {
    type: UPDATE_PRODUCT_DETAILS,
    payload
  };
};
