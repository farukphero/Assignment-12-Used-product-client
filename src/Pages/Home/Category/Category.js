import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const {_id, title, picture, about } = category;

  return (
    <div>
      <div className="card">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{about}</p>
          <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary "><Link to={`/products/${_id}`}>See All Products</Link></button>
          {/* <div className="card-actions">
            <button className="btn btn-primary"> </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
