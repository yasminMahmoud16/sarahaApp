import { Button } from '@/components/ui/button.jsx';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import CardWrapper from '@/shared/card/CardWrapper.jsx';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as img from "@/assets/Images/images.js";
import * as icon from "@/assets/Icons/icons.js";

import { Input } from '@/components/ui/input.jsx';

import useForgetPassword from '../../Hooks/useForgetPassword.js';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function Verify() {
  const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    
    const { verifyForgetCode, errMsg, succMsg } = useForgetPassword();



      const navigate = useNavigate();
      useEffect(() => {
        if (succMsg) {
          setTimeout(() => {
            navigate("/verify-password");
          }, 2000);
        }
      }, []);
    
    
    return (
      <>
        <CardWrapper className=" md:w-2xl shadow-amber-50/25 shadow">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <div>
              <img src={img.logo} alt="" className="w-40" />
            </div>
            <CardTitle className="text-3xl capitalize text-white font-semibold text-center">
              verify your password
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
            <div className="">
              <Button
                className="cursor-pointer p-5 bg-white text-purple-950"
                onClick={() => {
                  verifyForgetCode({ email, otp });
                }}
              >
                <Link
                  to={"/reset-password"}
                  className="transition-all  hover:text-pink-700 capitalize font-medium text-lg flex items-center justify-center gap-1 cursor-pointer px-10"
                >
                  verify password
                </Link>
              </Button>
            </div>

            <div className="">
              <Link
                to={"/resend-otp"}
                className="transition-all underline text-white hover:text-pink-700 capitalize font-medium text-lg flex items-center justify-center gap-1"
              >
                resend otp
                <icon.IoMdRefresh className="text-lg" />
              </Link>
            </div>
            {succMsg ? (
              <p className="text-green-600 text-sm mt-2">✅ {succMsg}</p>
            ) : null}
            {errMsg ? <p className="text-red-500 text-sm">{errMsg}</p> : null}
          </CardContent>
        </CardWrapper>
      </>
    );
}
