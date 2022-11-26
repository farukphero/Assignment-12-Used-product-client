import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers/buyer");
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin make Successfully");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
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
  return (
    <div className="mb-20 mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, idx) => 
              <tr key={buyer._id}>
                <th>{idx + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  {buyer?.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(buyer._id)}
                      className="btn btn-accent btn-sm"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={()=>handleDelete(buyer._id)} className="btn btn-accent btn-sm">Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
