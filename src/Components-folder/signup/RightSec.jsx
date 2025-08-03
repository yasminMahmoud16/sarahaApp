import CardComm from "@/shared/card/cardComm.jsx";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import * as icon from "@/assets/Icons/icons.js"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function RightSec() {
    // const GoogleSignUp = () => {
    //     const login = useGoogleLogin({
    //         onSuccess: (tokenResponse) => {
    //             console.log("Token:", tokenResponse);
    //         },
    //         onError: () => {
    //             console.log("Login Failed");
    //         },
    //     });
    return <>
        
        {/* <div> */}
            <div className="flex flex-col items-center justify-center gap-6 p-8 ">
                <Card className="w-full max-w-sm border-0 shadow-transparent">
                    <CardHeader>
                    <CardTitle className='text-2xl capitalize text-[#f08036] font-semibold'>create your saraha account </CardTitle>
                    <CardDescription className="text-sm capitalize  ">
                            signup with your gmail or manully
                        </CardDescription>

                    </CardHeader>
                <CardContent>
                    <Button
                        // onClick={() => login()}
                        variant="outline"
                        className="w-full flex items-center gap-2 justify-center mb-3 bg-[#d6201d] hover:bg-red-700"
                    >
                        {/* <FcGoogle size={20} /> */}
                        <icon.FaGoogle className="text-white" />
                    </Button>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                <Label htmlFor="fullName" className='capitalize text-gray-400'>full name </Label>
                                    <Input
                                    id="fullName"
                                        type="text"
                                    placeholder="Name"
                                    className='capitalize border-soft-gray placeholder:text-gray-400'
                                        required
                                    />
                                <Label htmlFor="email" className='capitalize text-gray-400'>Email</Label>
                                    <Input
                                        id="email"
                                    type="email"
                                    className='capitalize border-soft-gray placeholder:text-gray-400'
                                        placeholder="m@example.com"
                                        required
                                />
                                <Label htmlFor="password" className='capitalize text-gray-400'>password</Label>
                                <Input id="password"
                                    className='capitalize border-soft-gray placeholder:text-gray-400'
                                    type="password"
                                    required
                                    placeholder="*************"
                                />
                                </div>
                                <div className="grid gap-2">
                                

                                <Label htmlFor="confirmPassword" className='capitalize text-gray-400'>confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    className='capitalize border-soft-gray placeholder:text-gray-400'
                                    type="password"
                                    required 
                                    placeholder="*************" />
                                <Label htmlFor="phone" className='capitalize text-gray-400'>phone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    className='capitalize border-soft-gray mb-2'
                                    required
                                    placeholder="(02|+2) 123 456 789" />
                                
                                <Select>
                                    <SelectTrigger className="w-[180px] ">
                                        <SelectValue className=" placeholder:text-gray-400" placeholder="Select Your Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="male">male</SelectItem>
                                            <SelectItem value="female">female</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full bg-[#5416abd6] hover:bg-white hover:border  hover:border-purple-950 hover:text-purple-950">
                            Signup
                        </Button>
                       
                        {/* <GoogleLogin
                            onSuccess={credentialResponse => {
                                // const credintialDecoded = jwtDecode(credentialResponse.credential)
                                console.log(credentialResponse);
                                console.log(credentialResponse.credential);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        /> */}
                    </CardFooter>
                </Card>
            </div>
        {/* </div> */}
        {/* <div className="bg-red-300 min-h-screen flex items-center justify-center rounded-3xl w-full"> */}
            {/* <CardComm/> */}

             {/* <Input type="email" placeholder="Email" /> */}
                   
        {/* </div> */}
    </>
}
