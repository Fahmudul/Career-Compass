import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location.pathname, location.state);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="relative h-screen flex justify-center items-center">
        <span className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} replace={true} />;
  }
};

export default PrivateRoute;
