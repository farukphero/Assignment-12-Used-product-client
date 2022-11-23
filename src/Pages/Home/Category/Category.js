import React from "react";

const Category = ({ category }) => {
  const { title, picture, about } = category;

  return (
    <div>
      <div className="card">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{about.slice(0, 100) + "..."}</p>
          <button className="btn btn-outline">See More</button>
          {/* <div className="card-actions">
            <button className="btn btn-primary"> </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
