import React from "react";
import image from "../../../images/home-img.jpg";

const Banner = () => {
  return (
    <div className="mb-20  ">
      <div className="card lg:card-side">
        <div >
          <figure className="relative">
          <div className="bg-secondary bg-opacity-20 absolute top-16 bottom-0 w-full h-full rounded-lg">

          </div>
            <img className="rounded-lg w-full mt-10 md:mt-16 lg:mt-16" src={image} alt="Album" />
          </figure>
        </div>
        <div className="card-body lg:w-1/2 md:mt-16">
          <h2 className="card-title text-secondary text-3xl lg:text-5xl font-bold my-5">
            Aranoz, a Marketplace Connecting Buyers and Sellers
          </h2>
          <p className="text-lg md:text-xl">
            Aranoz is the fastest online resale marketplace. Start buying
            and selling today! Make shopping SIMPLE, SECURE and FAST on the
            largest marketplace. Discover what you need and sell
            all sorts of products in our simple yet powerful platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
