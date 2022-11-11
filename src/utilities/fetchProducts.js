const { default: axios } = require("axios");
const { SERVER_URL } = require("../environments");

const fetchProducts = async () => {
  const response = await axios.get(`${SERVER_URL}/products`);
  return response.data;
};

module.exports = fetchProducts;
