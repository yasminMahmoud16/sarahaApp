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
import { Link, useNavigate } from "react-router-dom";
import CardWrapper from "@/shared/card/CardWrapper.jsx";
import { useDispatch, useSelector } from "react-redux";
import useLogin from "../../Hooks/useLogin..js";
// import { login } from "../../Redux/slices/login.js";
import { useEffect } from "react";
import { loginData } from "../../Redux/slices/login.js";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginCard() {

    const { isLoading, isError, data } = useSelector((state) => state.login);

        const { register, handleSubmit, formState: { errors } } = useLogin();
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const onSubmit = (data) => {
          dispatch(loginData(data));
          console.log("Form submitted ✅", data);
        };

        useEffect(() => {
            if (data?.message) {
                setTimeout(() => {
    
                    navigate("/");
                }, 2000)
            }
        }, [data]);
    return (
      <>
        <CardWrapper className="">
          <CardHeader className="flex flex-col items-center justify-center gap-4">
            <div>
              <img src={img.logo2} alt="" className="w-40" />
            </div>
            <CardTitle className="text-center text-3xl text-[#fff] font-bold">
              Login
            </CardTitle>
            {/* <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction> */}
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
                  {errors.email && <p>{errors.email.message}</p>}
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
                  {errors.password && <p>{errors.password.message}</p>}

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
                  className="w-96 cursor-pointer  bg-[#6AA7B7]   hover:bg-[#558895]"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>

            {data?.message ? (
              <p className="text-green-600 text-sm mt-2">✅ {data.message}</p>
            ) : null}
            {isError ? <p className="text-red-500 text-sm">{isError}</p> : null}
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <GoogleLogin
              // theme=""
              // type=""
              size="medium"
              width={"380px"}
              shape="rectangular"
              text="signin_with"
              onSuccess={async (credentialResponse) => {
                const idToken = credentialResponse.credential;

                await axios.post("http://localhost:3000/auth/login/gmail", {
                  idToken: idToken,
                });

                navigate("/");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </CardFooter>
        </CardWrapper>
      </>
    );
}
