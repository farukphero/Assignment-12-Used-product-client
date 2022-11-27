import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Button from "../../../Components/Button/Button";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user, logOut } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
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
      console.log(data)
      return data;
    },
  });
  

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
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
  const handleAdvertise=()=>{
    fetch(`http://localhost:5000/advertise`, {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(products)
    
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        })

  }
  // console.log(product.image)
  return (
    <div className="my-10">
      {products.map((product) => (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-96 " src={product.image} alt="Album" />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">{product.header}</h2>
            <p> {product.description}</p>
            <p>
            <span className="font-bold">OriginalPrice</span>: $ {product.originalprice}
          </p>
          <p>
            <span className="font-bold">ResalePrice</span>: $ {product.resaleprice}
          </p>
          <p>
            <span className="font-bold">Purchasing Year</span> : {product.purchase} 
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
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" onClick={handleAdvertise}>Advertise</button>
              {
                 product.resaleprice && !product.paid &&  <Button>Availabe</Button>
              }
              {
                 product.resaleprice && product.paid &&  <Button>Sold</Button>
              }
             
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" onClick={()=>handleDelete(product._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
