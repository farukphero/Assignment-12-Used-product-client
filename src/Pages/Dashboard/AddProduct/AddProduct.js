import { format } from "date-fns";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const AddProduct = () => {
  useTitle('Dashboard/AddProducts')
  
  // const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [postDate, setPostDate] = useState(new Date());

  const date = format(postDate, "Pp");

  const handleAddProducts = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = user.email;
    const photo = user.photoURL;
    const date = form.date.value;
    const sellerName= form.sellerName.value;
    const category = form.category.value;
    const header = form.name.value;
    const image = form.image.value;
    const originalprice= form.originalprice.value;
    const resaleprice = form.resaleprice.value;
    const purchase =form.purchase.value;
    const phone = form.phone.value;
    const location =form.location.value;
    const condition = form.condition.value;
    const description = form.description.value;


    const newAddedProducts ={photo,email, date, sellerName, category, header, image, originalprice, resaleprice, purchase, phone, location, condition, description}

 
 
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(newAddedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/dashboard/myproducts");
        toast.success("Product Added");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="lg:flex justify-center">
      <div>
        <h1 className="text-4xl mt-12 mb-6 text-secondary">
          Add Your Products
        </h1>
        <form onSubmit={handleAddProducts}>
          <div className="form-control mt-5">
            <input
              type="text"
              name='sellerName'
              disabled
              value={user.displayName}
              className="input input-bordered mb-5"
            />
           
          </div>
          <div className="form-control mt-5">
            <input
              type="text"
              name='date'
              disabled
              value={date}
              className="input input-bordered mb-5"
            />
           
          </div>
          <div>
            <label className="label">
              <span className="label-text">Select Product Category</span>
            </label>
            <select name='category'
            required
              // {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled selected>
              Product Category
              </option>
              <option>Surface</option>
              <option> Dell</option>
              <option> HP</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              // {...register("name", { required: true })}
              type="text"
              name= 'name'
              required
              placeholder="Enter Your Product Name"
              className="input input-bordered w-full lg:w-96"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              // {...register("image", { required: true })}
              type="text"
              name='image'
              required
              placeholder="Enter Your Product Image URL"
              className="input input-bordered w-full lg:w-96"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              // {...register("originalprice", { required: true })}
              type="text"
              name='originalprice'
              required
              placeholder="Original Price"
              className="input input-bordered w-full lg:w-96"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Resale Price </span>
            </label>
            <input
              // {...register("resaleprice", { required: true })}
              type="text"
              name= 'resaleprice'
              required
              placeholder="Resale Price"
              className="input input-bordered w-full lg:w-96"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Year of purchase </span>
            </label>
            <input
              // {...register("purchase", { required: true })}
              type="text"
              name='purchase'
              required
              placeholder="Year of purchase"
              className="input input-bordered w-full lg:w-96"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              // {...register("phone", { required: true })}
              type="text"
              name='phone'
              required
              placeholder="Phone Number"
              className="input input-bordered w-full lg:w-96"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location </span>
            </label>
            <input
              // {...register("location", { required: true })}
              type="text"
              name ='location'
              required
              placeholder="Location"
              className="input input-bordered w-full lg:w-96"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Select Product Condition</span>
            </label>
            <select name='condition'
            required
              // {...register("condition", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Product Condition
              </option>
              <option>Excellent</option>
              <option> Good</option>
              <option> Fair</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              // {...register("description", { required: true })}
              name='description'
              required
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
          </div>
          <input
            className="text-white btn btn-primary mb-12 mt-6 w-full bg-gradient-to-r from-primary to-secondary"
            type="submit"
            value="Add A Product"
          />
        </form>
      </div>
      <div className="">
        <img
          className="w-[800px] lg:h-[800px] md:flex hidden"
          src="https://wisdmlabs.com/site/wp-content/uploads/2019/09/Cart-discount.png"
          alt=""
        />
      </div>
      
    </div>
  );
};

export default AddProduct;
