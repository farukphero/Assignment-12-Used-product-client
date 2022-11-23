import React from "react";
import microsoft from "../../../images/Microsoft-Logo.jpg";
import dell from "../../../images/dell-technologies-logo.jpg";
import hp from "../../../images/HP-Image.jpg";
import lenovo from "../../../images/Lenovo_logo.jpg";

const Brands = () => {
  return (
    <div className="my-20">
        <h1 className="text-3xl md:text-4xl ml-8 md:ml-40 font-bold mb-12">Our Brand / Partners</h1>
      <div className="lg:flex justify-between w-3/4 mx-auto">
        <img className="mb-10 md:mb-0"  src={microsoft} alt="" />
        <img className="mb-10 md:mb-0" src={dell} alt="" />
        <img className="mb-10 md:mb-0" src={hp} alt="" />
        <img className="mb-10 md:mb-0" src={lenovo} alt="" />
      </div>
    </div>
  );
};

export default Brands;
