import React from "react";

const Product = ({ product }) => {
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
          <img src= {image} alt="Movie" />
        </figure>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title">{header}</h2>
          <p> {description}</p>
          <p><span className="font-bold">OriginalPrice</span>: $ {originalPrice}</p>
          <p><span className="font-bold">ResalePrice</span>: $ {resalePrice}</p>
          <p><span className="font-bold">Use</span> : {use} month</p>
          <p><span className="font-bold">Product Condition</span>: {condition}</p>
          <p><span className="font-bold">Buy From Here </span>: {location}</p>
          <div className="card-actions justify-start lg:justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
