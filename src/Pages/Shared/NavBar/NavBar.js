import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const NavBar = () => {
 const {user ,logOut} = useContext(AuthContext)

 const handleLogOut=()=>{
  logOut()
 }

    const menuItems= (
        <React.Fragment>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          {/* <li>
            <Link className="text-xl" to="/appointment">Advertised items</Link>
          </li> */}
          <li>
            <Link className="text-xl" to="/categories">Categories </Link>
          </li>
          {/* <li>
            <Link className="text-xl" to="/contact">Contact</Link>
          </li> */}
          <li>
            <Link className="text-xl" to="/myorders">My orders</Link>
          </li>
          <li>
            <Link className="text-xl" to="/addproduct"> Add Product</Link>
          </li>
          <li>
            <Link className="text-xl" to="/myproducts">My Products </Link>
          </li>
          <li>
            <Link className="text-xl" to="/allsellers">All Sellers</Link>
          </li>
          <li>
            <Link className="text-xl" to="/allbuyers">All Buyers</Link>
          </li>
          <li>
            <Link className="text-xl" to="/reportedItems">Reported Items</Link>
          </li>
          <li>
           {
            user? <button className="text-xl rounded-lg" onClick={handleLogOut}>LogOut</button > :  <Link className="text-xl" to="/login">LogIn</Link>
           }
          </li>
        </React.Fragment>
      );
    
  return (
    <div className="mt-3">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
               {menuItems}
            </ul>
          </div>
          <Link to='/' className="normal-case text-secondary text-3xl font-bold">Aranoz.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
             {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
           <Button>wow</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
