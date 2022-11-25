import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin =(id)=>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
        method: "PUT",
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.modifiedCount > 0){
            toast.success('Admin make Successfully')
            refetch()
        }
    })

  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th> Email</th>
              <th>Admin </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, idx) =><tr>
              <th>{idx + 1}</th>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
               <td>              {
                buyer?.role !== 'admin' && <button onClick={()=>handleAdmin(buyer._id)} className="btn btn-accent btn-sm">Admin</button>
              }</td>
              <td><button className="btn btn-accent btn-sm">Delete</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;