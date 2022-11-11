import React, { useState } from "react";
import deleteIcon from "../../assets/img/delete-icon.svg";
import editIcon from "../../assets/img/edit-icon.svg";
import { updateProductDetails } from "../../redux";
import { connect } from "react-redux";
import { useEffect } from "react";

function AdminProductsItem({
  deleteMe,
  productInfo,
  setProductToEdit,
  showEditor,
  updateProductDetails
}) {
  const [product, setProduct] = useState({
    _id: "",
    title: "",
    weight: 0,
    image: ""
  });

  useEffect(() => {
    setProduct(productInfo);
  }, [productInfo]);

  const editMe = () => {
    setProductToEdit(productInfo._id);
    updateProductDetails(productInfo);
    showEditor(true);
  };

  return (
    <div className='adminproductsitem'>
      <div className='index'>
        {product.title.substring(0, 2) + product._id.substring(10, 12)}
      </div>
      <div className='title'>{product.title}</div>
      <div className='weight'>{product.weight}OZ</div>
      <div className='price'>${product.price}</div>
      <img
        src={product.image}
        height='100'
        width='86px'
        alt='imagen producto'
      />
      {/* options */}
      <div className='options'>
        <div className='option-item' onClick={editMe}>
          <img src={editIcon} alt='editar' />
        </div>
        <div className='option-item'>
          <img
            src={deleteIcon}
            alt='borrar'
            id={product._id}
            onClick={() => deleteMe(product._id)}
          />
        </div>
      </div>
      {/* options */}
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    updateProductDetails: payload => dispatch(updateProductDetails(payload))
  };
};

//export default AdminProductsItem;
export default connect(null, mapDispatchToProps)(AdminProductsItem);
