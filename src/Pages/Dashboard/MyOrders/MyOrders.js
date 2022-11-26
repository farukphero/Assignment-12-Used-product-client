import axios from "axios";
import React, { useEffect, useState } from "react";
import Order from "./Order";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((data) => setOrders(data.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 mb-28">
      {orders.map((order) => (
        <Order key={order._id} order={order}></Order>
      ))}
    </div>
  );
};

export default MyOrders;
