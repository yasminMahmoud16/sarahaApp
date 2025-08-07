
import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Redux/slices/auth.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useSignup from "../../Hooks/useSignup.js";
import * as icon from "@/assets/Icons/icons.js"




export default function RightSec() {

    const { isError, data, isLoading } = useSelector((state) => state.signup);
    const { register, handleSubmit, control, errors, login } = useSignup();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(signup(data));
        console.log("Form submitted ✅", data);
    };

    useEffect(() => {
        if (data?.message) {
            setTimeout(() => {

                navigate("/confirm-email");
            }, 2000)
        }
    }, [data]);



    return <>

        {/* <div> */}
        <div className="flex flex-col items-center justify-center gap-6 p-8  ">
            <Card className="w-full max-w-md border-0 shadow-transparent bg-transparent">
                <CardHeader>
                    <CardTitle className='text-3xl capitalize text-[#ffff] font-semibold'>create your saraha account </CardTitle>
                    <CardDescription className="text-sm capitalize text-gray-200 ">
                        signup with your gmail or manully
                    </CardDescription>

                </CardHeader>
                <CardContent>
                    <Button
                        onClick={() => login()}
                        variant="outline"
                        className="w-full flex items-center gap-2 justify-center mb-3 bg-[#d6201d] hover:bg-red-700 border-0 cursor-pointer"
                    >
                        <icon.FaGoogle className="text-white" />
                        <span className="text-white capitalize">signup with Google</span>
                    </Button>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName" className='capitalize text-gray-200'>full name </Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="Name"
                                    className='capitalize border-soft-gray placeholder:text-gray-200 '
                                    {...register("fullName", { required: true })}
                                />
                                {errors.fullName && <p>{errors.fullName.message}</p>}
                                <Label htmlFor="email" className='capitalize text-gray-200'>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    className='capitalize border-soft-gray placeholder:text-gray-200'
                                    placeholder="m@example.com"

                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                                <Label htmlFor="password" className='capitalize text-gray-200'>password</Label>
                                <Input id="password"
                                    className='capitalize border-soft-gray placeholder:text-gray-200'
                                    type="password"
                                    placeholder="*************"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <div className="grid gap-2">


                                <Label htmlFor="confirmPassword" className='capitalize text-gray-200'>confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    className='capitalize border-soft-gray placeholder:text-gray-200'
                                    type="password"
                                    placeholder="*************"
                                    {...register("confirmPassword", { required: true })}
                                />
                                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                                <Label htmlFor="phone" className='capitalize text-gray-200'>phone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    className='capitalize border-soft-gray mb-2 placeholder:text-gray-200'
                                    placeholder="(02|+2) 123 456 789"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && <p>{errors.phone.message}</p>}

                                <Controller
                                    control={control}
                                    name="gender"
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-[180px] bg-[#ffffffe1] mb-4">
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
                                    <p className="text-red-500 text-sm">{errors.gender.message}</p>
                                )}

                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-[#ffff] text-purple-950 hover:bg-[#ffffff8b] hover:border  cursor-pointer hover:text-white text-md">
                            {isLoading ? "Submitting..." : "Sign Up"}
                        </Button>
                    </form>
                    {data?.message ? (
                        <p className="text-green-600 text-sm mt-2">
                            ✅ {data.message}
                        </p>
                    ) : null}
                    {isError ? <p className="text-red-500 text-sm">{isError}</p> : null}
                </CardContent>
                <CardFooter className="flex-col gap-2">



                </CardFooter>
            </Card>
        </div>

    </>
}

