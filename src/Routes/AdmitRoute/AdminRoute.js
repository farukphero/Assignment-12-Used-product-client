import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div>
        <div className="text-center">
          <div role="status">
            <div
              className="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full"
              role="status"
            >
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  // logOut();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
