import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import Header from "./Header";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
   <div className="lg:flex justify-center">
  <div>
  <img className="w-full lg:h-[600px] md:flex hidden" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="" />
  </div>
    <div className="lg:h-[600px] flex items-center">
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      {/* <Header /> */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
         {...register("email", { required: true })} 
          type="email"
          placeholder="Enter Your Email"
          className="input input-bordered w-full lg:w-96"
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
         {...register("password", { required: true })} 
          type="password"
          placeholder="Password"
          className="input input-bordered w-full lg:w-96"
        />
      </div>
     <div>
     <select className="my-5" {...register("category", { required: true })}>
        <option value="">Select Category...</option>
        <option value="seller">Seller</option>
        <option value="buyer"> Buyer</option>
      </select>
     </div>
      <input className="btn btn-primary mb-10" type="submit" />
      <p>{data}</p>
    </form>
    </div>
   </div>
  );
};

export default LogIn;
