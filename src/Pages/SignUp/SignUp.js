import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm();
  const { createUserByEmail, providerGoogleLogIn, updateUser} = useContext(AuthContext);
  const navigate= useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();

  const handleSignUp = (data) => {
    setError('')
     
    createUserByEmail(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        toast.success('User Created Successful')
        navigate(from, { replace: true });
        const  profile = {
            displayName : data.name,
            category: data.category
        }
        updateUser(profile)
        .then(()=>{})
        .catch(error=> {setError(error.message)
        console.log(error)})

      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignUp=()=>{
    providerGoogleLogIn(provider)
    .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });

      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="lg:flex justify-center">
      <div>
        <img
          className="w-full lg:h-[600px] md:flex hidden"
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="lg:h-[600px] flex items-center">
        <div>
          <h1 className="text-4xl  mb-6 text-secondary">Create your account</h1>
          <form
            onSubmit={handleSubmit(handleSignUp)}
          >
            {/* <Header /> */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full lg:w-96"
              />
            </div>
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
              <select
                className="my-5 w-full"
                {...register("category", { required: true })}
              >
                <option value="">Select Category...</option>
                <option value="seller">Seller</option>
                <option value="buyer"> Buyer</option>
              </select>
            </div>
            <input
              className="text-white btn btn-primary mb-10 w-full bg-gradient-to-r from-primary to-secondary"
              type="submit"
              value="Sign Up"
            />
            <p>{error}</p>
            <p>
              Already have an account?
              <Link className="underline text-secondary" to="/login">
                Log In
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignUp} className="btn btn-outline hover:bg-gradient-to-r from-primary to-secondary hover:border-none w-full"><FcGoogle  className="mr-2 w-8 h-8"/>  Google</button>
            {/* <p>{data}</p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
