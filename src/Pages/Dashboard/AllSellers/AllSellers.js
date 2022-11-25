import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/sellers/seller`);
      const data = await res.json();
      return data;
    },
  });
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
            // const remaining = reviews.filter((rev) => rev._id !== id);
            // setReviews(remaining);
            refetch()
          }
        });
    }
  };
  return (
    <div className="mb-20 mt-10">
      <div className="overflow-x-auto">
        <table className="table w-2/3 mx-auto">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th> Email</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, idx) =><tr key={seller._id}>
              <th>{idx + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td><button onClick={()=>handleDelete(seller._id)} className="btn btn-accent btn-sm">Delete</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
