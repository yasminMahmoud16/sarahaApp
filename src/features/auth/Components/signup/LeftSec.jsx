import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import {Input} from "@/components/ui/input"
import { logo } from '@/assets/Images/images.js';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';
import * as img from '@/assets/Images/images.js';
export default function LeftSec() {
    return <>
        
        <div className=' w-full h-full  rounded-r-[180px] rounded-l-xl flex flex-col items-center justify-center '
         style={{
                        // backgroundImage: `url(${img.gradient})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
        >
            <div className='w-70'>
                <img src={logo} alt="logo" className='' />
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-white text-3xl font-bold capitalize'>Welcome to Saraha</h1>
                <p className='text-white text-lg capitalize'>if you have an account sigin </p>
                    <Link to={'/signin'}>
                <Button className='w-60 bg-transparent border border-white capitalize hover:bg-white hover:text-purple-950 cursor-pointer text-md'>
                    sigin
                </Button>
                    </Link>
            </div>
            
        </div>

        {/* <Input type="email" placeholder="Email" />
        <GoogleLogin
            onSuccess={credentialResponse => {
                // const credintialDecoded = jwtDecode(credentialResponse.credential)
                console.log(credentialResponse);
                console.log(credentialResponse.credential);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />; */}
        
    </>
}
