import React from "react";
import Button from "../../../Components/Button/Button";

const AdvertiseItem = ({ advertise }) => {
  const {
    _id,
    image,
    header,
    description,
    originalprice,
    resaleprice,
    purchase,
    condition,
    location,
    date,
  } = advertise;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="md:w-72 h-72" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:ml-10">{header}</h2>
          <p className="md:ml-10"> {description}</p>
          <div className="md:flex md:justify-around">
            <div>
              <p>
                <span className="font-bold">OriginalPrice</span>: $ 
                {originalprice}
              </p>
              <p>
                <span className="font-bold">ResalePrice</span>: $ {resaleprice}
              </p>
              <p>
                <span className="font-bold">Purchasing Year</span> : {purchase}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Product Condition</span>: 
                {condition}
              </p>
              <p>
                <span className="font-bold">Buy From Here </span>: {location}
              </p>
              <p>
                <span className="font-bold">Post date </span>: {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseItem;
