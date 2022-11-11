import React, { useState, useRef } from "react";
import ProductEditorView from "./ProductEditorView";

import firebase from "../../firebase/app";
import axios from "axios";
import { SERVER_URL } from "../../environments.js";
import { connect } from "react-redux";
import { useEffect } from "react";
import { updateProductDetails } from "../../redux";

const ProductEditor = ({
  productInfo,
  showEditor,
  updateProductDetails,
  updateEditedItem
}) => {
  const inputFile = useRef();
  const [product, setProduct] = useState({});
  const [somethingChanged, setSomethingChanged] = useState(true);

  useEffect(() => {
    setProduct(productInfo);
  }, [productInfo]);

  useEffect(() => {
    if (JSON.stringify(product) === JSON.stringify(productInfo)) {
      setSomethingChanged(false);
    } else {
      setSomethingChanged(true);
    }
  }, [product, productInfo]);

  const inputChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const fileChange = async e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const imageUrl = await fileRef.getDownloadURL();
    setProduct({ ...product, image: imageUrl });
  };

  const formSubmit = e => {
    e.preventDefault();
  };

  const loadImage = () => {
    inputFile.current.click();
  };

  const handleSave = () => {
    if (!somethingChanged) showEditor(false);

    axios
      .post(`${SERVER_URL}/products/edit/`, product)
      .then(res => {
        if (res.data.sucess) {
          updateProductDetails(product);
          updateEditedItem(product);
          showEditor(false);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <ProductEditorView
      fileChange={fileChange}
      formSubmit={formSubmit}
      handleSave={handleSave}
      inputChange={inputChange}
      inputFile={inputFile}
      loadImage={loadImage}
      product={product}
      productInfo={productInfo}
      showEditor={showEditor}
      somethingChanged={somethingChanged}
    />
  );
};

const mapStateToProps = state => {
  return { productInfo: state.productDetails.productInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProductDetails: payload => dispatch(updateProductDetails(payload))
  };
};

//export default ProductEditor
export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
