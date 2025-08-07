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
export default function Resend() {
  const dispatch = useDispatch();
  const { isError, data } = useSelector((state) => state.resendOtp);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
    useEffect(() => {
        if (data?.message) {
            setTimeout(() => {

                navigate("/confirm-email");
            }, 2000)
        }
    }, [data]);
  return (
    <>
      <CardWrapper className=" md:w-2xl shadow-amber-50/25 shadow">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <div>
            <img src={img.logo} alt="" className="w-40" />
          </div>
          <CardTitle className="text-3xl capitalize text-white font-semibold text-center">
            Resend Otp
          </CardTitle>
          <CardDescription className="text-sm capitalize text-gray-200 ">
            the otp valid for 2 minuts
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-7">
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="capitalize border-soft-gray placeholder:text-gray-200 md:w-96"
            placeholder="Enter Your Email"
          />

          <div className="">
            <Button
              className="cursor-pointer p-5 bg-white text-purple-950"
              onClick={() => dispatch(resendOtp({ email }))}
            >
              <Link
                href=""
                className="transition-all  hover:text-pink-700 capitalize font-medium text-lg flex items-center justify-center gap-1 cursor-pointer px-10 "
              >
                resend Otp
              </Link>
            </Button>
          </div>

          {data?.message ? (
            <p className="text-green-600 text-sm mt-2">✅ {data.message}</p>
          ) : null}
          {isError ? <p className="text-red-500 text-sm">{isError}</p> : null}
        </CardContent>
      </CardWrapper>
    </>
  );
}
