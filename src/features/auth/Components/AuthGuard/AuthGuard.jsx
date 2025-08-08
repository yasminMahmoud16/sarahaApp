import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const token = localStorage.getItem("accessToken");
  return token ? <Navigate to="/" replace /> : children;
}
