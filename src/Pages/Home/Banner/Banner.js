import React from "react";
import image from "../../../images/home-img.jpg";

const Banner = () => {
  return (
    <div className="mt-8 mb-20 bg-base-300">
      <div className="card lg:card-side">
        <div className="relative">
          <div className="bg-black opacity-10 absolute w-full h-full rounded-lg">

          </div>
          <figure>
            <img className="rounded-lg w-full" src={image} alt="Album" />
          </figure>
        </div>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl lg:text-4xl font-bold my-5">
            Classified platform, a Marketplace Connecting Buyers and Sellers
          </h2>
          <p>
            Aranoz is the fastest online resale marketplace. Start buying
            and selling today! Make shopping SIMPLE, SECURE and FAST on the
            largest marketplace. Discover what you need and sell
            all sorts of products in our simple yet powerful platform.
          </p>
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
