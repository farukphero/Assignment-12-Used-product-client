import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import image from "../../../../src/images/favicon.ico";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  const menuItems = (
    <React.Fragment>
      <li onClick={() => setIsMenuOpen(false)}>
        <Link className="text-xl" to="/">
          Home
        </Link>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <Link className="text-xl" to="/advertiseditems">
          Advertised items
        </Link>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <Link className="text-xl" to="/categories">
          Categories
        </Link>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <Link className="text-xl" to="/blog">
          Blog
        </Link>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <Link className="text-xl" to="/dashboard">
          Dashboard
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <header className="bg-secondary text-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost text-black lg:hidden"
          >
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
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <div className="flex">
              <img className="rounded-lg h-8 w-8 mr-2" src={image} alt="" />
              <Link
                to="/"
                className="normal-case text-white text-3xl font-bold"
              >
                Aranoz.
              </Link>
            </div>
          </a>
          <ul className="items-center hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li onClick={() => setIsMenuOpen(false)}>
              {user ? (
                <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" onClick={handleLogOut}>
                  LogOut
                </button>
              ) : (
                <div className="flex">
                  <li>
                    <Link className="inline-flex mr-3 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to="/login">
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-accent hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Sign up
                    </Link>
                  </li>
                </div>
              )}
            </li>

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
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-500 ease-in rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 text-black" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-[-16px] -right-4 w-screen  z-10">
                <div className="p-5 bg-secondary rounded">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <div className="flex">
                          <img
                            className="rounded-lg h-8 w-8 mr-2"
                            src={image}
                            alt=""
                          />
                          <Link
                            to="/"
                            className="normal-case text-white text-3xl font-bold"
                          >
                            Aranoz.
                          </Link>
                        </div>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-500 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{menuItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
