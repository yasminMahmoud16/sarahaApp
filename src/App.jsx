import { Button } from "@/components/ui/button";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./RouterLayout/RouterLayout.jsx";
import Home from "./pages/home/home.jsx";
import Signup from "./features/auth/Pages/Signup.jsx";
import Signin from "./features/auth/Pages/Signin.jsx";
import Profile from "./pages/profile/profile.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import ConfirmEmail from "./features/auth/Pages/ConfirmEmail.jsx";
import ResendOtp from "./features/auth/Pages/ResendOtp.jsx";
import ForgetPassword from "./features/auth/Pages/ForgetPassword.jsx";
import VerifyPassword from "./features/auth/Pages/VerifyPassword.jsx";
import ResetPassword from "./features/auth/Pages/ResetPassword.jsx";
import { Toaster } from "sonner";
import Guard from "./features/auth/Components/Guard/Guard.jsx";
import AuthGuard from "./features/auth/Components/AuthGuard/AuthGuard.jsx";

export default function App() {
  const route = createHashRouter([
    {
      path: "",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: (
            <Guard>
              <Home />
            </Guard>
          ),
        },
        {
          path: "signup",
          element: (
            <AuthGuard>
              {" "}
              <Signup />{" "}
            </AuthGuard>
          ),
        },
        {
          path: "confirm-email",
          element: (
            <AuthGuard>
              <ConfirmEmail />
            </AuthGuard>
          ),
        },
        {
          path: "resend-otp",
          element: (
            <AuthGuard>
              <ResendOtp />
            </AuthGuard>
          ),
        },
        {
          path: "signin",
          element: (
            <AuthGuard>
              <Signin />
            </AuthGuard>
          ),
        },
        {
          path: "forget-password",
          element: (
            <AuthGuard>
              {" "}
              <ForgetPassword />
            </AuthGuard>
          ),
        },
        {
          path: "verify-password",
          element: (
            <AuthGuard>
              <VerifyPassword />
            </AuthGuard>
          ),
        },
        {
          path: "reset-password",
          element: (
            <AuthGuard>
              <ResetPassword />{" "}
            </AuthGuard>
          ),
        },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={route} />
        <Toaster richColors />
      </Provider>
    </>
  );
}
