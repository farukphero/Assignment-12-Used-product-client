import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading/Loading";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";


const LogIn = () => {
  useTitle('LogIn')
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { accountLogIn,providerGoogleLogIn } = useContext(AuthContext);
  const [logInError, setLoginError] = useState('')
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [logInUserEmail, setLogInUserEmail] = useState("");
  const [token] = useToken(logInUserEmail)
   
if(token){
<Loading></Loading>
navigate(from, { replace: true });
}
 

  const handleLogin = (data) => {
    accountLogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLogInUserEmail(data.email);
        toast.success('Login success')
      })
      .catch((error) => setLoginError(error.message));
  };
  const handleGoogleLogin=()=>{
    providerGoogleLogIn(provider)
    .then((result) => {
        const user = result.user;
        setLogInUserEmail(user.email);

       

      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="w-11/12 mx-auto lg:flex justify-center">
      <div>
        <img
          className="w-full lg:h-[600px] md:flex hidden"
          src="https://img.freepik.com/free-vector/version-control-concept-illustration_114360-1587.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="lg:h-[600px] flex items-center">
        <div>
          <h1 className="text-4xl mb-6 text-secondary">
            Log in to your account
          </h1>
          <form onSubmit={handleSubmit(handleLogin)}>
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
            {errors.email?.type === 'required' && <p role="alert">Email name is required</p>}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full lg:w-96 mb-2"
              />
              {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
            </div>
            {/* <div>
              <select
                className="my-5 w-full"
                {...register("category", { required: true })}
              >
                <option value="">Select Category...</option>
                <option value="seller">Seller</option>
                <option value="buyer"> Buyer</option>
              </select>
            </div> */}
            <p className="text-red-300 mb-3">{logInError}</p>
            <input
              className="btn btn-primary text-white mb-10 w-full bg-gradient-to-r from-primary to-secondary"
              type="submit"
              value="Log In"
            />
            <p>
              Don't have an account ? <Link className="underline text-secondary w-full " to="/signup">
                Sign Up
              </Link>
            </p>
            {/* <p>{data}</p> */}
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
             <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-gradient-to-r from-primary to-secondary hover:border-none w-full"><FcGoogle  className="mr-2 w-8 h-8"/>  Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
