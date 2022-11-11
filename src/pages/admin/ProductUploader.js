import React, { useState, useRef } from "react";
import btnAdd from "../../assets/img/btn-add.jpg";
import firebase from "../../firebase/app";
import axios from "axios";
import { SERVER_URL } from "../../environments.js";

const ProductUploader = props => {
  const { closeMe, broadcastNewproduct } = props;
  const inputFile = useRef();
  const [product, setProduct] = useState({
    category: "Kit",
    title: "Shampoo",
    description:
      "Este producto está elaborado siguiendo los más altos estándares de calidad.",
    weight: 32,
    price: 500,
    image:
      "https://firebasestorage.googleapis.com/v0/b/veky-4355e.appspot.com/o/product-shampoo.jpg?alt=media&token=9759f4a3-910b-4eb7-948d-19c385abc7d0"
  });

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
    axios
      .post(`${SERVER_URL}/products`, product)
      .then(res => {
        const newProduct = res.data._doc;
        broadcastNewproduct(newProduct);
        closeMe();
      })
      .catch(err => console.log(err));
  };
  return (
    <div className='productUploader'>
      <h1>Nuevo producto</h1>

      {/* form */}
      <form action='' onSubmit={formSubmit}>
        <input
          type='text'
          name='category'
          className='category'
          placeholder='categoría'
          onChange={inputChange}
          value={product.category}
        />
        <input
          type='text'
          name='title'
          className='title'
          placeholder='título'
          onChange={inputChange}
          value={product.title}
        />
        <textarea
          type='text'
          name='description'
          className='description'
          placeholder='descripción'
          onChange={inputChange}
          value={product.description}
        />
        <input
          type='number'
          name='price'
          className='price'
          placeholder='precio'
          onChange={inputChange}
          value={product.price}
        />
        <input
          type='number'
          name='weight'
          className='weight'
          placeholder='onzas'
          onChange={inputChange}
          value={product.weight}
        />

        {/* save and cancel btns */}
        <div className='row-bottom'>
          <div className='image' onClick={loadImage}>
            <input
              type='file'
              name='image'
              onChange={fileChange}
              ref={inputFile}
              accept='.jpg,.jpeg,.png'
            />

            <img
              src={product.image}
              alt='vista previa'
              className='image-preview'
            />

            <img src={btnAdd} alt='añadir' className='image-add' />
          </div>
          <button className='btn btn-tertiary' onClick={closeMe}>
            Cancelar
          </button>
          <button className='btn btn-primary' onClick={handleSave}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploader;
