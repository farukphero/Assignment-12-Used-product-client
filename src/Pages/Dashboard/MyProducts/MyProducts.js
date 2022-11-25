import React, { useContext } from "react";
import { useQuery } from "react-query";
import Button from "../../../Components/Button/Button";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
    const {user, logOut}= useContext(AuthContext)
    const {data: newproducts = []} = useQuery({
        queryKey: ['newproducts', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/newproducts?email=${user.email}`,{
              headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            if(res.status === 401 || res.status === 403){
              logOut()
            }
            const data = await res.json();
            return data;
        }
    });
  return (
    <div className="my-10">
     {
        newproducts.map(product=><div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={product.data.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.data.name}</h2>
          <p> {product.data.description}</p>
          <div className="card-actions justify-end">
            <Button>Availabe</Button>
           <Button>Delete</Button>
          </div>
        </div>
      </div>
            )
     }


    
    </div>
  );
};

export default MyProducts;
