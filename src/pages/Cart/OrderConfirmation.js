import axios from "axios";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ContactUs from "../home/ContactUs";
import { SERVER_URL } from "../../environments.js";
import { clearCart, removeFromCart } from "../../redux/";
import { useHistory } from "react-router";

function OrderConfirmation({ items, removeFromCart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const sendInfo = async () => {
    const cartItems = items.map(item => {
      return {
        _id: item._id,
        title: item.title,
        qty: item.qty,
        price: item.price
      };
    });

    const info = {
      name,
      phone,
      cartItems
    };

    history.push("/ordersubmitted");

    try {
      const res = await axios.post(`${SERVER_URL}/orders/saveOrder`, info);
      //clear cart
      if (res.data.success) {
        items.forEach(item => {
          removeFromCart(item._id);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='orderconfirmation'>
      <h1>Gracias por hacer su pedido. Lo tendremos listo en unos minutos.</h1>
      <div className='subtitle'>
        Por favor, denos su número para confirmar, o contáctenos.
      </div>

      <div className='cust-info'>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor='phone'>Teléfono</label>
        <input
          type='phone'
          name='phone'
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <div className='btn btn-primary btn-cust-info' onClick={sendInfo}>
          OK
        </div>

        <div className='contactus'>
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart()),
    removeFromCart: _id => dispatch(removeFromCart(_id))
  };
};

const mapStateToProps = state => {
  return {
    items: state.cartReducer.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);
