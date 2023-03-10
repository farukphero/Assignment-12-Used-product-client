import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const {category: title, picture, about } = category;

  return (
    <div>
      <div className="card">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="md:h-40 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="md:w-80">{about}</p>
          <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary "><Link to={`/products/${title}`}>See All Products</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Category;
