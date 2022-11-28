import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Category from "../Category/Category";

const Categories = () => {
    useTitle('Categories')
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            categories.map(category=><Category
                key={category._id}
                category={category}
            >
            </Category>)
        }
       
    </div>
  );
};

export default Categories;
