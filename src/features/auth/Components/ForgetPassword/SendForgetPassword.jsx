import { Button } from '@/components/ui/button.jsx';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import CardWrapper from '@/shared/card/CardWrapper.jsx';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as img from "@/assets/Images/images.js";
import { Input } from '@/components/ui/input.jsx';
import useForgetPassword from '../../Hooks/useForgetPassword.js';
import { toast } from 'sonner';
import { Oval } from 'react-loader-spinner';

export default function SendForgetPassword() {
  const { sendForgetPassword, errMsg, succMsg } = useForgetPassword();
  const [email, setEmail] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

    



  const navigate = useNavigate();
  
    
  useEffect(() => {
    if (succMsg) {
      toast.success(succMsg);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
        navigate("/verify-password");
      }, 2000);
    } else if (errMsg) {
      toast.error(errMsg);
    }
  }, [succMsg, errMsg]);
      // useEffect(() => {
      //   if (succMsg) {
      //     setTimeout(() => {
      //       navigate("/verify-password");
      //     }, 2000);
      //   }
      // }, [succMsg]);
    
    
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
        <CardWrapper className=" md:w-2xl shadow-amber-50/25 shadow">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <div>
              <img src={img.logo2} alt="" className="w-40" />
            </div>
            <CardTitle className="text-3xl capitalize text-white font-semibold text-center">
              Forget your paassword
            </CardTitle>
            <CardDescription className="text-center text-sm capitalize text-gray-200 ">
              pleasw enter your email to change your password
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
                className="cursor-pointer p-5 bg-white text-mint-green-text  hover:bg-mint-green hover:text-white"
                onClick={() => {
                  sendForgetPassword(email);
                }}
              >
                <Link
                  href=""
                  className="transition-all    capitalize font-medium text-lg flex items-center justify-center gap-1 cursor-pointer px-10 "
                >
                  forget password
                </Link>
              </Button>
            </div>

            {/* {data?.message ? (
              <p className="text-green-600 text-sm mt-2">✅ {data.message}</p>
            ) : null} */}
            {/* {errMsg ? (
              <p className=" text-red-950 text-sm font-semibold capitalize">
                {errMsg}
              </p>
            ) : null}
            {succMsg ? (
              <p className="text-green-600 text-sm mt-2">✅ {succMsg}</p>
            ) : null} */}
          </CardContent>
        </CardWrapper>
      </>
    );
}
