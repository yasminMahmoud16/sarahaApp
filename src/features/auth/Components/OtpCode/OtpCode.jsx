import CardWrapper from '@/shared/card/CardWrapper.jsx'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input.jsx'
import * as img from '@/assets/Images/images.js'
import * as icon from '@/assets/Icons/icons.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { confirmEmail } from '../../Redux/slices/confirmEmail.js'
import { Button } from '@/components/ui/button.jsx'
import { toast } from 'sonner'
import { Oval } from 'react-loader-spinner'
import { OTPWithTimer } from './OTPWithTimer.jsx'
export default function OtpCode() {


  const dispatch = useDispatch();
  const { isError, data } = useSelector((state) => state.confirmEmail);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

  const navigate = useNavigate();


    
  useEffect(() => {
    if (data?.message) {
      toast.success(data.message);
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
        navigate("/signin");
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
              confirm your email
            </CardTitle>
            <CardDescription className="text-sm capitalize text-gray-200 ">
              <OTPWithTimer/>
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
              <Button className="cursor-pointer p-5 bg-white text-mint-green-text hover:bg-mint-green hover:text-white">
                <Link
                  to={""}
                  onClick={() => dispatch(confirmEmail({ email, otp }))}
                  className="transition-all  capitalize font-medium text-lg flex items-center justify-center gap-1 cursor-pointer px-10"
                >
                  confirm email
                </Link>
              </Button>
            </div>

            {/* <div className="">
              <Link
                to={"/resend-otp"}
                className="transition-all underline text-white hover:text-mint-green capitalize font-medium text-md flex items-center justify-center gap-1"
              >
                resend otp
                <icon.IoMdRefresh className="text-lg" />
              </Link>
            </div> */}
          </CardContent>
        </CardWrapper>
      </>
    );
}
