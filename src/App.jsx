import { Button } from "@/components/ui/button"
import { createHashRouter, RouterProvider } from "react-router-dom"
import RouterLayout from "./RouterLayout/RouterLayout.jsx"
import Home from "./pages/home/home.jsx"
import Signup from "./features/auth/Signup.jsx"
import Signin from "./features/auth/Signin.jsx"
import Profile from "./pages/profile/profile.jsx"
import { Provider } from 'react-redux';
import { store } from "./Redux/store.js"
import ConfirmEmail from "./features/auth/ConfirmEmail.jsx"
import ResendOtp from "./features/auth/ResendOtp.jsx"
import ForgetPassword from "./features/auth/forgetPassword.jsx"
import VerifyPassword from "./features/auth/VerifyPassword.jsx"
import ResetPassword from "./features/auth/ResetPassword.jsx"
export default function App() {

  const route = createHashRouter([
    {
      path: "",
      element: <RouterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "signup", element: <Signup /> },
        { path: "confirm-email", element: <ConfirmEmail /> },
        { path: "resend-otp", element: <ResendOtp /> },
        { path: "signin", element: <Signin /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "verify-password", element: <VerifyPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);


  return <>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </>
}
