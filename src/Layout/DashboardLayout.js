import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 md:bg-secondary md:text-white text-base-content">
            {!isSeller && !isAdmin && (
              <li>
                <Link className="text-xl" to="/dashboard/myorders">
                  My orders
                </Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link className="text-xl" to="/dashboard/addproduct">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link className="text-xl" to="/dashboard/myproducts">
                    My Products
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link className="text-xl" to="/dashboard/addproduct">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link className="text-xl" to="/dashboard/allsellers">
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link className="text-xl" to="/dashboard/allbuyers">
                    All Buyers
                  </Link>
                </li>
                <li>
                  <Link className="text-xl" to="/dashboard/reportedItems">
                    Reported Items
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
