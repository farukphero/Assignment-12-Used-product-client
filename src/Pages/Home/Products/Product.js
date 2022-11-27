import React from "react";
import { DayPicker } from "react-day-picker";
import toast from "react-hot-toast";

const Product = ({ product, setBookingInfo, postDate, setPostDate }) => {
   
  const {
    header,
    image,
    originalprice,
    resaleprice,
    purchase,
    condition,
    location,
    description,
    sellerName,
    date
  } = product;
  const reportedProducts ={
    header,
    image,
    sellerName,
    date

  }

  const handleReport=()=>{
    fetch("http://localhost:5000/reportedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(reportedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        // navigate("/dashboard/myproducts");
        toast.success("Reported to admin");
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

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
            {originalprice}
          </p>
          <p>
            <span className="font-bold text-secondary">ResalePrice</span>: $
            {resaleprice}
          </p>
          <p>
            <span className="font-bold text-secondary">Purchasing year</span> : {purchase} month
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
              onClick={ handleReport}
              // htmlFor="booking-modal"
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
