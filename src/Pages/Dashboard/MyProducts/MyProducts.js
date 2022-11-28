import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Button from "../../../Components/Button/Button";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user, logOut } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://used-product-resale-server.vercel.app/products?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (res.status === 401 || res.status === 403) {
        logOut();
      }
      const data = await res.json();
      console.log(data)
      return data;
    },
  });
  

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://used-product-resale-server.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Delete");
            refetch()
          }
        });
    }
  };
 
  // console.log(product.image)
  return (
    <div className="my-10">
      {products.map((product) => <MyProduct key={product._id}
      
      product={product}
      handleDelete={handleDelete}
      ></MyProduct> )}
    </div>
  );
};

export default MyProducts;
