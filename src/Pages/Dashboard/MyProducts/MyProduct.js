import React from "react";
import toast from "react-hot-toast";
import Button from "../../../Components/Button/Button";

const MyProduct = ({ product, handleDelete }) => {
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
  } = product;

  const advertiseProduct = {
    adsProductId:_id,
    image,
    header,
    description,
    originalprice,
    resaleprice,
    purchase,
    condition,
    location,
    date,
  };
  const handleAdvertise = () => {
    fetch(`https://used-product-resale-server.vercel.app/advertises`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(advertiseProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Add to Advertise')
      });
  };
  return (
    <div>
       
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
            {!product.paid && (
              <button
                className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                onClick={handleAdvertise}
              >
                Advertise
              </button>
            )}
            {!product.paid && <Button>Availabe</Button>}
            {product.paid && <button className="btn">sold</button>}

            {!product.paid && (
              <button
                className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MyProduct;
