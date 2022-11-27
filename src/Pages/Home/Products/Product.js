import React from "react";
import { DayPicker } from "react-day-picker";

const Product = ({ product, setBookingInfo, postDate, setPostDate }) => {
   
  const {
    header,
    image,
    originalPrice,
    resalePrice,
    use,
    condition,
    location,
    description,
    sellerName,
    date
  } = product;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>

        <div className="card-body lg:w-2/3">
          <div className="card-actions justify-start lg:justify-end">
            <h1>
              <span className="font-bold text-secondary">Seller</span> :
              {sellerName}
            </h1>
          </div>
          <h2 className="card-title">{header}</h2>
          <p> {description}</p>
          <p>
            <span className="font-bold text-secondary">OriginalPrice</span>: $
            {originalPrice}
          </p>
          <p>
            <span className="font-bold text-secondary">ResalePrice</span>: $
            {resalePrice}
          </p>
          <p>
            <span className="font-bold text-secondary">Use</span> : {use} month
          </p>
          <p>
            <span className="font-bold text-secondary">Product Condition</span>:
            {condition}
          </p>
          <p>
            <span className="font-bold text-secondary">Buy From Here </span>:
            {location}
          </p>
          <DayPicker
            className="hidden"
            mode="single"
            selected={postDate}
            onSelect={setPostDate}
            // footer={footer}
          />
          <p>
            
            <span className="font-bold text-secondary">Posted date </span>:
            {date}
          </p>
          <div className="card-actions justify-start lg:justify-end">
            <label
              // onClick={() => setBookingInfo(product,postDate)}
              htmlFor="booking-modal"
              className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
            >
              Report
            </label>
          </div>
          <div className="card-actions justify-start lg:justify-end">
            <label
              onClick={() => setBookingInfo(product, postDate)}
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
