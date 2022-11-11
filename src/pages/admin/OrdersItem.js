import React, { useEffect } from "react";
import tick from "../../assets/img/tick.svg";
import remove from "../../assets/img/remove.svg";
import elipsis from "../../assets/img/elipsis.svg";
import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../environments";

// extract the date from Mongoose created date
const dateOf = d => {
  const split = d.split("-");
  const day = split[2].substring(0, 2);
  const month = split[1];
  const year = split[0];

  const newDate = `${day}-${month}-${year}`;

  return newDate;
};

function OrdersItem({ orderInfo }) {
  const [statusIndicator, setStatusIndicator] = useState(27);
  const [status] = useState("pendiente");

  useEffect(() => {
    let newStatus;

    switch (status) {
      case "pending":
        newStatus = "pendiente";
        break;
      case "approved":
        newStatus = "aprobado";
        break;
      case "cancelled":
        newStatus = "cancelado";
        break;

      default:
        newStatus = "pending";
    }

    axios
      .post(`${SERVER_URL}/orders/updatestatus`, {
        newStatus,
        _id: orderInfo._id
      })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  }, [orderInfo.state, orderInfo._id, status]);

  const aprobadoClick = () => {
    setStatusIndicator(26);
  };
  const canceladoClick = () => {
    setStatusIndicator(86);
  };
  const pendienteClick = () => {
    setStatusIndicator(148);
  };

  return (
    <div className='orderitem'>
      <div
        className='status-indicator'
        style={{ top: statusIndicator + "px" }}
      ></div>
      <div className='header'>
        <h2>{orderInfo.name}</h2>
        <h3>{orderInfo.phone}</h3>
        <h4>{dateOf(orderInfo.created_at)}</h4>
      </div>

      <div className='list'>
        {orderInfo.cartItems.map(item => (
          <div className='list-item'>
            <div className='qty'>{item.qty}</div>
            <div className='price'>${item.price}</div>
            <div className='title'>{item.title}</div>
          </div>
        ))}
      </div>

      <div className='actions'>
        <div className='actions-item' onClick={aprobadoClick}>
          <img src={tick} alt='' />
          <h6>Aprobado</h6>
        </div>
        <div className='actions-item' onClick={canceladoClick}>
          <img src={remove} alt='' />
          <h6>Cancelado</h6>
        </div>
        <div className='actions-item' onClick={pendienteClick}>
          <img src={elipsis} alt='' />
          <h6>Pendiente</h6>
        </div>
      </div>
    </div>
  );
}

export default OrdersItem;
