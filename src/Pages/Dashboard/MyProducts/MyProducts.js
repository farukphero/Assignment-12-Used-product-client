import React, { useContext } from "react";
import { useQuery } from "react-query";
import Button from "../../../Components/Button/Button";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user, logOut } = useContext(AuthContext);
  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user.email}`,
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
      return data;
    },
  });
  return (
    <div className="my-10">
      {products.map((product) => (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-96 " src={product.image} alt="Album" />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">{product.name}</h2>
            <p> {product.description}</p>
            <p>
            <span className="font-bold">OriginalPrice</span>: $ {product.originalprice}
          </p>
          <p>
            <span className="font-bold">ResalePrice</span>: $ {product.resaleprice}
          </p>
          <p>
            <span className="font-bold">Use</span> : {product.use} month
          </p>
          <p>
            <span className="font-bold">Product Condition</span>: {product.condition}
          </p>
          <p>
            <span className="font-bold">Buy From Here </span>: {product.location}
          </p>
          <p>
            <span className="font-bold">Post date </span>: {product?.date}
          </p>
            <div className="card-actions justify-between md:justify-end">
              <Button>Availabe</Button>
              <Button>Delete</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
