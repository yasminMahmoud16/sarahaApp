import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as img from '@/assets/Images/images.js';
import * as icon from '@/assets/Icons/icons.js';
import { Link, useNavigate } from "react-router-dom";
import CardWrapper from "@/shared/card/CardWrapper.jsx";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../Hooks/useLogin..js";
// import { login } from "../../Redux/slices/login.js";
import { useEffect, useState } from "react";
import { loginData } from "../../Redux/slices/login.js";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "sonner";
import { Oval } from "react-loader-spinner";

export default function LoginCard() {

    const { isLoading, isError, data } = useSelector((state) => state.login);

        const {
          register,
          handleSubmit,
          formState: { errors },
          loginGoogle,
        } = useLogin();
        const dispatch = useDispatch();
        const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

        const onSubmit = (data) => {
          dispatch(loginData(data));
          console.log("Form submitted ✅", data);
        };

  
    
  useEffect(() => {
    if (data?.message) {
      toast.success(data.message);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
        navigate("/");
      }, 2000);
      // Optionally: dispatch(clearData());
    } else if (isError) {
      toast.error(isError);
      // Optionally: dispatch(clearError());
    }
  }, [data?.message, isError]);
        // useEffect(() => {
        //     if (data?.message) {
        //         setTimeout(() => {
    
        //             navigate("/");
        //         }, 2000)
        //     }
        // }, [data]);
    return (
      <>
        {showOverlay && (
          <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
            <Oval
              visible={true}
              height={80}
              width={80}
              color="#6AA7B7"
              secondaryColor="#E0F4F7"
              strokeWidth={5}
              strokeWidthSecondary={3}
            />
          </div>
        )}
        <CardWrapper className="">
          <CardHeader className="flex flex-col items-center justify-center gap-4">
            <div>
              <img src={img.logo2} alt="" className="w-40" />
            </div>
            <CardTitle className="text-center text-3xl text-[#fff] font-bold">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="capitalize border-soft-gray placeholder:text-gray-200"
                    placeholder="m@example.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className=" text-red-950 text-sm font-semibold capitalize">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-gray-200">
                    Password
                  </Label>
                  <Input
                    id="password"
                    className="capitalize border-soft-gray placeholder:text-gray-200 "
                    type="password"
                    placeholder="*************"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p className=" text-red-950 text-sm font-semibold capitalize">
                      {errors.password.message}
                    </p>
                  )}

                  <div className="flex flex-col items-center mb-2">
                    <Link
                      to={"/forget-password"}
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-gray-200"
                    >
                      Forgot your password ?
                    </Link>
                    <Link
                      to={"/signup"}
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-gray-200"
                    >
                      create account
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  className="w-60 md:w-96 cursor-pointer  bg-[#6AA7B7]   hover:bg-[#558895]"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-0">
            <div className=" flex gap-2 items-center justify-center mt-0  w-60 md:max-w-md lg:max-w-lg mx-auto">
              <GoogleLogin
                shape="pill"
                type="icon"
                text="signup_with"
                width={"100%"}
                onSuccess={async (credentialResponse) => {
                  const idToken = credentialResponse.credential;
                  loginGoogle(idToken);

                }}
                onError={() => console.log("Login Failed")}
              />

              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:bg-[#eff6fb]">
                                <icon.FaFacebook className="text-blue-500 text-xl" />
                              </div>
                              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:bg-[#eff6fb]">
                                <icon.FaXTwitter className=" text-xl" />
                              </div>
            </div>
          </CardFooter>
        </CardWrapper>
      </>
    );
}
