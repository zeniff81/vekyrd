import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { SERVER_URL } from "../../environments";

import OrdersItem from "./OrdersItem";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/orders/getOrders`);
        setOrders(response.data.orders);
      } catch (err) {
        console.log(err);
      }
    };

    loadOrders();
  }, []);

  const filterOrders = filter => {
    let arr = [];

    orders.map(order => {
      if (order.status === filter) arr.push(order);

      return "";
    });

    setFilteredOrders(arr);
  };

  const allClick = () => {
    setFilter(false);
  };
  const approvedClick = () => {
    setFilter(true);
    filterOrders("approved");
  };
  const cancelledClick = () => {
    setFilter(true);
    filterOrders("cancelled");
  };
  const pendingClick = () => {
    setFilter(true);
    filterOrders("pending");
  };

  return (
    <div className='orders'>
      <h1>Pedidos</h1>

      <div className='filter'>
        <div onClick={allClick} className='btn btn-primary filter-btn all'>
          Todos
        </div>
        <div
          onClick={approvedClick}
          className='btn btn-primary filter-btn approved'
        >
          Aprobados
        </div>
        <div
          onClick={cancelledClick}
          className='btn btn-primary filter-btn cancelled'
        >
          Cancelados
        </div>
        <div
          onClick={pendingClick}
          className='btn btn-primary filter-btn pending'
        >
          Pendientes
        </div>
      </div>

      <div className='orders-list'>
        {!filter &&
          orders.map(orderInfo => (
            <OrdersItem key={orderInfo._id} orderInfo={orderInfo} />
          ))}

        {filter &&
          filteredOrders.map(orderInfo => (
            <OrdersItem key={orderInfo._id} orderInfo={orderInfo} />
          ))}
      </div>
    </div>
  );
}

export default Orders;
