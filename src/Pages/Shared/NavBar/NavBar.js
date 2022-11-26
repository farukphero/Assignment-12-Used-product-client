import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  const menuItems = (
    <React.Fragment>
      <li>
            <Link className="text-xl" to="/">Home</Link>
          </li>
      <li>
            <Link className="text-xl" to="/advertiseditem">Advertised items</Link>
          </li>
      <li>
        <Link className="text-xl" to="/categories">
          Categories
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="text-xl" to="/dashboard">
          Dashboard
        </Link>
      </li>
     
      <li>
        {user ? (
          <button className="text-xl rounded-lg" onClick={handleLogOut}>
            LogOut
          </button>
        ) : (
          <Link className="text-xl" to="/login">
            LogIn
          </Link>
        )}
      </li>
    </React.Fragment>
  );

  return (
    <div className="mt-3 ">
      <div className="navbar bg-accent bg-opacity-80 lg:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-8"
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
          <Link
            to="/"
            className="normal-case text-secondary lg:text-white text-3xl font-bold"
          >
            Aranoz.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ? (
            <img
              title={user.displayName}
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <FaUserCircle className="mr-2 w-10 h-10 text-white" />
          )}
          {/* <label
           
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
          <label  htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-8"
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
