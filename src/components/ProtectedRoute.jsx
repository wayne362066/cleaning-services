import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthorised = false,
  children,
  redirectPath = "/"
}) => {
  if (!isAuthorised) return <Navigate to={redirectPath} replace />;
  return children ?? <Outlet />;
};

export default ProtectedRoute;