import { useContext } from "react";

export const ProductDetailsContext = useContext({});

export const ProductDetailsProvider = props => {
  value = {};
  return (
    <ProductDetailsContext.Provider
      value={value}
      {...props}
    ></ProductDetailsContext.Provider>
  );
};
