
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/slices/auth.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useSignup from "../../Hooks/useSignup.js";
import axios from "axios"
import { GoogleLogin } from "@react-oauth/google"
import * as icon from "@/assets/Icons/icons.js"
import { toast } from "sonner"
import { Oval } from "react-loader-spinner"




export default function RightSec() {

    const { isError, data, isLoading } = useSelector((state) => state.signup);
  const { register, handleSubmit, control, errors, signupWithGoogle } =
    useSignup();
  const [showOverlay, setShowOverlay] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(signup(data));
        console.log("Form submitted ✅", data);
    };

  
  useEffect(() => {
    if (data?.message) {
      toast.success(data.message);
      setShowOverlay(true); 
      setTimeout(() => {
        setShowOverlay(false); 
                  navigate("/confirm-email");
              }, 2000)
      // Optionally: dispatch(clearData());
    } else if (isError) {
      toast.error(isError);
      // Optionally: dispatch(clearError());
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

        <div className="flex flex-col items-center justify-center gap-6 p-8  ">
          <Card className="w-full max-w-md border-0 shadow-transparent bg-transparent">
            <CardHeader>
              <CardTitle className="text-3xl capitalize text-[#ffff] font-semibold">
                create your saraha account{" "}
              </CardTitle>
              <CardDescription className="text-sm capitalize text-gray-200 ">
                signup with your gmail or manully
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="fullName"
                      className="capitalize text-gray-200"
                    >
                      full name{" "}
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Name"
                      className="capitalize border-soft-gray placeholder:text-gray-200 "
                      {...register("fullName", { required: true })}
                    />
                    {errors.fullName && (
                      <p className=" text-red-950 text-sm font-semibold capitalize">
                        {errors.fullName.message}
                      </p>
                    )}
                    <Label htmlFor="email" className="capitalize text-gray-200">
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
                    <Label
                      htmlFor="password"
                      className="capitalize text-gray-200"
                    >
                      password
                    </Label>
                    <Input
                      id="password"
                      className="capitalize border-soft-gray placeholder:text-gray-200"
                      type="password"
                      placeholder="*************"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <p className=" text-red-950 text-sm font-semibold capitalize">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="capitalize text-gray-200"
                    >
                      confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      className="capitalize border-soft-gray placeholder:text-gray-200"
                      type="password"
                      placeholder="*************"
                      {...register("confirmPassword", { required: true })}
                    />
                    {errors.confirmPassword && (
                      <p className=" text-red-950 text-sm font-semibold capitalize">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                    <Label htmlFor="phone" className="capitalize text-gray-200">
                      phone
                    </Label>
                    <Input
                      id="phone"
                      type="text"
                      className="capitalize border-soft-gray mb-2 placeholder:text-gray-200"
                      placeholder="(02|+2) 123 456 789"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && (
                      <p className=" text-red-950 text-sm font-semibold capitalize">
                        {errors.phone.message}
                      </p>
                    )}

                    <Controller
                      control={control}
                      name="gender"
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-[180px] bg-[#ffffffe1] mt-2 mb-4">
                            <SelectValue placeholder="Select Your Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="male">male</SelectItem>
                              <SelectItem value="female">female</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.gender && (
                      <p className=" text-red-950 text-sm font-semibold capitalize mb-2">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="group w-full rounded-4xl  bg-[#ffff] text-mint-green-text hover:text-white hover:bg-mint-green  hover:border-mint-green  cursor-pointer  text-md"
                >
                  {isLoading ? (
                    <>
                      <div className=" flex items-center justify-center gap-2 ">
                        <Oval
                          visible={true}
                          height={90}
                          width={90}
                          color="#6AA7B7"
                          ariaLabel="oval-loading"
                          secondaryColor="#E0F4F7"
                          strokeWidth={5} // thickness of the loader
                          strokeWidthSecondary={3}
                          wrapperClass="" // keep empty so Tailwind applies to parent
                        />
                        <p className="text-md font-normal capitalize text-mint-green-text group-hover:text-white">
                          submiting...
                        </p>
                      </div>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>

              <div className=" flex gap-3 items-center justify-center mt-4  w-60 md:max-w-md lg:max-w-lg mx-auto">
                <GoogleLogin
                  shape="pill"
                  type="icon"
                  text="signup_with"
                  width={"100%"}
                  onSuccess={async (credentialResponse) => {
                    const idToken = credentialResponse.credential;
                    signupWithGoogle(idToken);
                  }
                  }
                  onError={() =>
                    toast.error('signup Failed please try again ')
                  }
                />

                <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:bg-[#eff6fb]">
                  <icon.FaFacebook className="text-blue-500 text-xl" />
                </div>
                <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer transition-all hover:bg-[#eff6fb]">
                  <icon.FaXTwitter className=" text-xl" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2"></CardFooter>
          </Card>
        </div>
      </>
    );
}

