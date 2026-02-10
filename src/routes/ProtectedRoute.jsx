import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "../utils/auth";

const ProtectedRoute = ({ allowedRoles, children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const role = getRole();

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
