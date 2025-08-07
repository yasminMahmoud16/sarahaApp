import CardWrapper from "@/shared/card/CardWrapper.jsx";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input.jsx";
import * as img from "@/assets/Images/images.js";
import * as icon from "@/assets/Icons/icons.js";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resendOtp } from "../../Redux/slices/resentOtp.js";
import useForgetPassword from "../../Hooks/useForgetPassword.js";
export default function Reset() {
    // const dispatch = useDispatch();
    // const { isError, data } = useSelector((state) => state.resendOtp);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [otp, setOtp] = useState("");

    const { resetPassword } = useForgetPassword();

    //   const navigate = useNavigate();
    //   useEffect(() => {
    //     if (data?.message) {
    //       setTimeout(() => {
    //         navigate("/confirm-email");
    //       }, 2000);
    //     }
    //   }, [data]);
    return (
      <>
        <CardWrapper className=" md:w-2xl shadow-amber-50/25 shadow">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <div>
              <img src={img.logo} alt="" className="w-40" />
            </div>
            <CardTitle className="text-3xl capitalize text-white font-semibold text-center">
              reset password
            </CardTitle>
            {/* <CardDescription className="text-sm capitalize text-gray-200 ">
            the otp valid for 2 minuts
          </CardDescription> */}
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-center gap-7">
            <Input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="capitalize border-soft-gray placeholder:text-gray-200 md:w-96"
              placeholder="Enter Your Email"
            />
            <div className="flex flex-col items-center justify-center gap-4 mb-2 ">
              <InputOTP maxLength={6} onChange={setOtp}>
                <InputOTPGroup className="flex gap-2">
                  <InputOTPSlot
                    index={0}
                    className="border-l-1 rounded-md  w-7 md:w-10 text-3xl p-4 md:p-5 "
                  />
                  <InputOTPSeparator className="text-white hidden md:block" />
                  <InputOTPSlot
                    index={1}
                    className="border-l-1 rounded-md w-7 md:w-10 text-3xl p-4 md:p-5"
                  />
                </InputOTPGroup>

                <InputOTPSeparator className="text-white  md:block" />
                <InputOTPGroup className="flex gap-2">
                  <InputOTPSlot
                    index={2}
                    className="border-l-1 rounded-md w-7 md:w-10 text-3xl p-4 md:p-5"
                  />
                  <InputOTPSeparator className="text-white hidden md:block" />
                  <InputOTPSlot
                    index={3}
                    className="border-l-1 rounded-md w-7 md:w-10 text-3xl p-4 md:p-5"
                  />
                </InputOTPGroup>
                <InputOTPSeparator className="text-white  md:block" />
                <InputOTPGroup className="flex gap-2">
                  <InputOTPSlot
                    index={4}
                    className="border-l-1 rounded-md w-7 md:w-10 text-3xl p-4 md:p-5"
                  />
                  <InputOTPSeparator className="text-white hidden md:block " />
                  <InputOTPSlot
                    index={5}
                    className="border-l-1 rounded-md w-7 md:w-10 text-3xl p-4 md:p-5"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="capitalize border-soft-gray placeholder:text-gray-200 md:w-96"
              placeholder="Enter Your password"
            />
            <Input
              id="confirmpassword"
              type="password"
              onChange={(e) => setconfirmPassword(e.target.value)}
              className="capitalize border-soft-gray placeholder:text-gray-200 md:w-96"
              placeholder="Enter Your confirmpassword"
            />

            <div className="">
              <Button
                            className="cursor-pointer p-5 bg-white text-purple-950"
                            onClick={()=>{resetPassword({email,otp,password,confirmPassword})}}
                //   onClick={() => dispatch(resendOtp({ email }))}
              >
                <Link
                  href=""
                  className="transition-all  hover:text-pink-700 capitalize font-medium text-lg flex items-center justify-center gap-1 cursor-pointer px-10 "
                >
                  resend Otp
                </Link>
              </Button>
            </div>

            {/* {data?.message ? (
            <p className="text-green-600 text-sm mt-2">✅ {data.message}</p>
          ) : null}
          {isError ? <p className="text-red-500 text-sm">{isError}</p> : null} */}
          </CardContent>
        </CardWrapper>
      </>
    );
}
