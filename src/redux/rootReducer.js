import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import productDetailsReducer from "./productDetails/productDetailsReducer";

const rootReducer = combineReducers({
  productDetailsReducer,
  cartReducer,
  userReducer
});

export default rootReducer;
