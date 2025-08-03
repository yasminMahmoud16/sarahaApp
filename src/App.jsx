import { Button } from "@/components/ui/button"
import { createHashRouter, RouterProvider } from "react-router-dom"
import RouterLayout from "./RouterLayout/RouterLayout.jsx"
import Home from "./pages/home/home.jsx"
import Signup from "./features/auth/Components/signUp/Signup.jsx"
import Signin from "./pages/auth/signin.jsx"
import Profile from "./pages/profile/profile.jsx"
export default function App() {

  const route = createHashRouter([
    {
      path: '', element: <RouterLayout />, children: [
      {index:true, element:<Home/>},
      {path:'signup', element:<Signup/>},
      {path:'signup', element:<Signin/>},
      {path:'profile', element:<Profile/>},
    ]}
  ])


  return <>
    <RouterProvider router={route } />
  </>
}
