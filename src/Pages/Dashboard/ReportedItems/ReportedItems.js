import React  from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import useTitle from "../../../hooks/useTitle";

const ReportedItems = () => {
  useTitle('Dashboard/ReportedItems')
  const { data: items = [], refetch } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await  fetch("https://used-product-resale-server.vercel.app/reportedItems")
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://used-product-resale-server.vercel.app/reportedItems/${id}`, {
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
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product Name</th>
              <th>Seller</th>
              <th>Posted Date </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
          {items.map((item, i) => <tr>
              <th>{i +1}</th>
            <th><div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div></th>
              <td>{item.header}</td>
              <td>{item.sellerName} </td>
              <td>{item.date} </td>
              <td> <button onClick={()=>handleDelete(item._id)} className="btn btn-sm">Delete</button> </td>
            </tr>)}
           
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default ReportedItems;
