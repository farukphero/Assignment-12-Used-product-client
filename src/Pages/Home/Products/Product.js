import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";

const Product = ({ product, setBookingInfo,postDate,setPostDate }) => {
  
  const {
    header,
    image,
    originalPrice,
    resalePrice,
    use,
    condition,
    location,
    description,
  } = product;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title">{header}</h2>
          <p> {description}</p>
          <p>
            <span className="font-bold">OriginalPrice</span>: $ {originalPrice}
          </p>
          <p>
            <span className="font-bold">ResalePrice</span>: $ {resalePrice}
          </p>
          <p>
            <span className="font-bold">Use</span> : {use} month
          </p>
          <p>
            <span className="font-bold">Product Condition</span>: {condition}
          </p>
          <p>
            <span className="font-bold">Buy From Here </span>: {location}
          </p>
          <DayPicker className="hidden"
            mode="single"
            selected={postDate}
            onSelect={setPostDate}
            // footer={footer}
          />
          <p>Posted date : {format(postDate, 'Pp')}</p>
          <div className="card-actions justify-start lg:justify-end">
            <label
              onClick={() => setBookingInfo(product,postDate)}
              htmlFor="booking-modal"
              className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
