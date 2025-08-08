import { Navigate } from "react-router-dom";

export default function Guard({ children }) {
  const token = localStorage.getItem("accessToken");
  return token ? children : <Navigate to="/signin" replace />;
}
