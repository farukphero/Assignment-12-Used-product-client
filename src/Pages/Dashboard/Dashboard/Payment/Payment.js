import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const {header, image, price } = booking;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {header} </h2>
          <p>
            <span className="font-bold text-secondary">Price</span> : {price}
          </p>
        </div>
      </div>
     <div>
        <h1 className="text-secondary text-xl font-bold mt-5 ml-5">Pay Here Now </h1>
     <div className="w-96 mt-10 p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
          booking={booking}
          />
        </Elements>
      </div>
     </div>
    </div>
  );
};

export default Payment;
