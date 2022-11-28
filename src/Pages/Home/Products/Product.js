import React, { useContext } from "react";
import { DayPicker } from "react-day-picker";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import useSeller from "../../../hooks/useSeller";
import useAdmin from "../../../hooks/useAdmin";

const Product = ({ product, setBookingInfo, postDate, setPostDate }) => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);

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
    date,
    photo,
  } = product;
  const reportedProducts = {
    header,
    image,
    sellerName,
    date,
  };

  const handleReport = () => {
    fetch("https://used-product-resale-server.vercel.app/reportedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(reportedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Reported to admin");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[500px]" src={image} alt="Movie" />
        </figure>

        <div className="card-body lg:w-2/3">
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
            <span className="font-bold text-secondary">Purchasing year</span> :{" "}
            {purchase} month
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
          />
          <p>
            <span className="font-bold text-secondary">Posted date </span>:
            {date}
          </p>
          <div className="card-actions">
            <div className="avatar">
              <div className="w-14 rounded-full">
               {
                photo && <img className="h-14 w-14" src={photo} alt='' />
               }
               {
                !photo && <FaUserCircle className="mr-2 w-14 h-14" />
               }
              </div>
            </div>
            <h1 className="uppercase flex">
              <span className="font-bold ">Seller</span> : {sellerName}
              {
                product.status && <img className="h-4 w-4 ml-2 mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcW0f5i2rAwBrpTF-KpmJfpGnNAsVwxaYIcIm2gvdRbg&s" alt="" />
              }
            </h1>
          </div>
          <div>
            {isSeller && isAdmin ?  <p className="card-actions justify-start lg:justify-end">
                <span className="text-red-500 font-bold">Notice</span> :
                <span>
                  You can not buy from this account. If you want to buy ,you
                  must create a buyer account.
                </span>
              </p> :
            
            
              <div className=" flex justify-start lg:justify-end">
                <div className="card-actions">
                  {!product.paid && (
                    <label onClick={handleReport} className="btn mr-5 ">
                      Report
                    </label>
                  )}
                </div>
                <div className="card-actions justify-start lg:justify-end">
                  {!product.paid && (
                    <label
                      onClick={() => setBookingInfo(product, postDate)}
                      htmlFor="booking-modal"
                      className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
                    >
                      Book Now
                    </label>
                  )}
                  {product.paid && (
                    <label className="btn text-white">Sold</label>
                  )}
                </div>
              </div>
             
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
