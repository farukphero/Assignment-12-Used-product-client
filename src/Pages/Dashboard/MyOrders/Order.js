import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const Order = ({ order }) => {
  const { _id,date, header, image, location, phone, price } = order;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {header} </h2>
          <p> <span className="font-bold text-secondary">Price</span> : {price} </p>
          <p> <span className="font-bold text-secondary">Buyer Phone </span> : {phone} </p>
          <p> <span className="font-bold text-secondary">Meeting Location</span> : {location} </p>
          <p> <span className="font-bold text-secondary">Booking date</span> : {date} </p>
          <div className="card-actions justify-end">
           {
            order.price && !order.paid && <Link to={`/dashboard/payment/${_id}`}>
              <Button>Pay Now</Button>
            </Link>
           }
           {
            order.price && order.paid &&  <span className="btn btn-accent">Paid</span>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
