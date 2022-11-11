import store from "../redux/store";

export const itemExists = _id => {
  const state = store.getState();
  const items = state.cartReducer.items;
  const search = item => item._id === _id;
  return items.findIndex(search);
};
