import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { SERVER_URL } from "../../environments";
import CardFlipper from "./CardFlipper";
import { v4 as uuidv4 } from "uuid";

function RandomProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const randomQty = Math.floor(Math.random() * 5 + 2);
    const fetchProducts = async () => {
      const response = await axios.post(
        `${SERVER_URL}/products/randomproducts`,
        { qty: randomQty }
      );
      const data = response.data;
      const newProducts = data.map(el => el);

      setProducts(newProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className='randomproducts'>
      {products.map(el => (
        <CardFlipper key={uuidv4()} productInfo={el} />
      ))}
    </div>
  );
}

export default RandomProducts;
