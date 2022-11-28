import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import useTitle from "../../../hooks/useTitle";

const AllSellers = () => {
  useTitle('Dashboard/AllSellers')
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`https://used-product-resale-server.vercel.app/sellers/seller`);
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://used-product-resale-server.vercel.app/users/${id}`, {
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
  const handleVerify=(seller)=>{
    console.log(seller)
    const updateSeller = {
      email:seller.email,
      name:seller.name,
        status: false
    }
    fetch(`https://used-product-resale-server.vercel.app/verifySeller/${seller.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSeller),
    })
    .then((res) => res.json())
      .then((data) => {
        toast.success('Verified')
        refetch()
        console.log(data);
      });

  }
  return (
    <div className="mb-20 mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th> Email</th>
              <th> Verify</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, idx) =><tr key={seller._id}>
              <th>{idx + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              {
                !seller.status && <td> <button onClick={()=>handleVerify(seller)} className="btn btn-sm" >Verify</button> </td>
              }
              {
                seller.status && <td> <img className="h-4 w-4 ml-2 mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcW0f5i2rAwBrpTF-KpmJfpGnNAsVwxaYIcIm2gvdRbg&s" alt="" /></td>
              }
              <td><button onClick={()=>handleDelete(seller._id)} className="btn btn-accent btn-sm">Delete</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
