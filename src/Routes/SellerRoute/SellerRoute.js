import React, { useContext } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <div>
        <div className="my-20 flex justify-center">
          
            <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
            
        </div>
      </div>
    );
  }

  if (user && isSeller) {
    return children;
  }
  // logOut();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
