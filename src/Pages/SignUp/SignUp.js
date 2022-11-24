import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
//   const [data, setData] = useState("");
  const { createUserByEmail,providerGoogleLogIn } = useContext(AuthContext);
  const navigate= useNavigate()
  const provider = new GoogleAuthProvider();

  const handleSignUp = (data) => {
    createUserByEmail(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate('/')

      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignUp=()=>{
    providerGoogleLogIn(provider)
    .then((result) => {
        const user = result.user;
        navigate('/')

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
          <h1 className="text-4xl  mb-6 text-blue-400">Create your account</h1>
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
                className="my-5"
                {...register("category", { required: true })}
              >
                <option value="">Select Category...</option>
                <option value="seller">Seller</option>
                <option value="buyer"> Buyer</option>
              </select>
            </div>
            <input
              className="btn btn-primary mb-10"
              type="submit"
              value="Sign Up"
            />
            <p>
              Already have an account?{" "}
              <Link className="underline text-blue-600" to="/login">
                Log In
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignUp} className="btn btn-outline w-full"><FcGoogle  className="mr-2 w-8 h-8"/>  Google</button>
            {/* <p>{data}</p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
