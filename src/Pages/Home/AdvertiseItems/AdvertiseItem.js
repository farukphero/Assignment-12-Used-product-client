import React from 'react';
import Button from '../../../Components/Button/Button';

const AdvertiseItem = ({advertise}) => {
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
      (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-96 " src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title">{header}</h2>
          <p> {description}</p>
          <p>
            <span className="font-bold">OriginalPrice</span>: $ {originalprice}
          </p>
          <p>
            <span className="font-bold">ResalePrice</span>: $ {resaleprice}
          </p>
          <p>
            <span className="font-bold">Purchasing Year</span> : {purchase}
          </p>
          <p>
            <span className="font-bold">Product Condition</span>: {condition}
          </p>
          <p>
            <span className="font-bold">Buy From Here </span>: {location}
          </p>
          <p>
            <span className="font-bold">Post date </span>: {date}
          </p>
          <div className="card-actions justify-between md:justify-end">

            {!advertise.paid && <Button>Book Now</Button>}
            {advertise.paid && <button className="btn">sold</button>}
          </div>
        </div>
      </div>
      )
    </div>
    );
};

export default AdvertiseItem;