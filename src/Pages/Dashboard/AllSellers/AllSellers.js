import React from "react";
import { useQuery } from "react-query";

const AllSellers = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
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
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) =><tr>
              <th>{idx + 1}</th>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <button className="btn btn-accent btn-sm">Delete</button>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
