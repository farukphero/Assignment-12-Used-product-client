import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Order from "./Order";
import image from '../../../images/sad-face-in-rounded-square.png'

const MyOrders = () => {
  const {user} = useContext(AuthContext)
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`https://used-product-resale-server.vercel.app/bookings?email=${user.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
      })
      .then((data) => setOrders(data.data));
  }, [user.email]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 mb-28">
      {
        orders.length? orders.map((order) => (
          <Order key={order._id} order={order}></Order>
        )): <div className="h-[500px] md:w-[1000px]  flex justify-center items-center"><div>
          <p className="text-red-500 text-4xl ">No Orders Available</p> 
        <img  className="h-80 w-80 mt-10" src={image} alt="" />
        </div>
        </div>    
      }
    </div>
  );
};

export default MyOrders;
