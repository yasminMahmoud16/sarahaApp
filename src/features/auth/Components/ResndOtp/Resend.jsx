import CardWrapper from "@/shared/card/CardWrapper.jsx";
import {CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resendOtp } from "../../Redux/slices/resentOtp.js";
import { toast } from "sonner";
import { Oval } from "react-loader-spinner";
import * as img from "@/assets/Images/images.js";
import * as icon from "@/assets/Icons/icons.js";



export default function Resend() {
  const dispatch = useDispatch();
  const { isError, data } = useSelector((state) => state.resendOtp);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(false);

    
  useEffect(() => {
    if (data?.message) {
      toast.success(data.message);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
        navigate("/confirm-email");
      }, 2000);
    } else if (isError) {
      toast.error(isError);
    }
  }, [data?.message, isError]);

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
            Resend Otp
          </CardTitle>
          <CardDescription className="text-sm capitalize text-gray-200 ">
            please enter your email
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
              className="cursor-pointer p-5 bg-white text-mint-green-text hover:bg-mint-green hover:text-white"
              onClick={() => dispatch(resendOtp({ email }))}
            >
              <Link
                href=""
                className="transition-all   capitalize font-medium text-lg flex items-center justify-center gap-1 cursor-pointer px-10 "
              >
                resend Otp
              </Link>
            </Button>
          </div>


        </CardContent>
      </CardWrapper>
    </>
  );
}
