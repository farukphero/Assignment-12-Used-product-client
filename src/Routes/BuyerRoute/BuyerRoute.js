import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return (
      <div>
        <div class="text-center">
          <div role="status">
            <div
              class="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full"
              role="status"
            >
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (user && isBuyer) {
    return children;
  }
//   logOut();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
