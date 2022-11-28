import React from "react";
import { useQuery } from "react-query";
import useTitle from "../../../hooks/useTitle";
import AdvertiseItem from "./AdvertiseItem";

const AdvertiseItems = () => {
  useTitle("AdvertiseItems");
  const { data: advertises = [] } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch("https://used-product-resale-server.vercel.app/advertises");
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      {
      advertises.length && (
        <div className="my-20 ">
          {advertises.length && (
            <h1 className="text-4xl font-semibold md:ml-40 mb-5">
              Advertised Items For Selling :
            </h1>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5 bg-white">
            {advertises.length &&
              advertises.map((advertise) => (
                <AdvertiseItem
                  key={advertise._id}
                  advertise={advertise}
                ></AdvertiseItem>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertiseItems;
