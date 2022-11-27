import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    const { _id,date, header, image, location, phone, price } = data;

    console.log(data)
    return (
        <div>
            <h1>Payment</h1>
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
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default Payment;