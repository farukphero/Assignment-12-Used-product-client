import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Order from "./Order";

const MyOrders = () => {
  const {user} = useContext(AuthContext)
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user.email}`)
      .then((data) => setOrders(data.data));
  }, [user.email]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 mb-28">
      {orders.map((order) => (
        <Order key={order._id} order={order}></Order>
      ))}
    </div>
  );
};

export default MyOrders;
