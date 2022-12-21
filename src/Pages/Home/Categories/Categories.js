import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Category from "../Category/Category";

const Categories = () => {
    useTitle('Categories')
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('https://used-product-resale-server.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
  return (
   <div>
    <h1 className="md:ml-40 mt-5 text-4xl font-bold">Select Your Favorite Category : </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            categories.map(category=><Category
                key={category._id}
                category={category}
            >
            </Category>)
        }
       
    </div>
   </div>
  );
};

export default Categories;
