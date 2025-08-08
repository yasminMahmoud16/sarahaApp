
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';
import * as img from '@/assets/Images/images.js';
export default function LeftSec() {
    return <>
        
        <div className=' w-full h-full  rounded-r-[180px] rounded-l-xl flex flex-col items-center justify-center '

        >
            <div className='w-70'>
                <img src={img.logo2} alt="logo" className='' />
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-white text-3xl font-bold capitalize'>Welcome to </h1>
                <p className='text-white text-lg capitalize'>if you have an account sigin </p>
                    <Link to={'/signin'}>
                <Button className='w-60 bg-transparent border border-white capitalize hover:bg-white hover:text-mint-green cursor-pointer text-md'>
                    sigin
                </Button>
                    </Link>
            </div>
            
        </div>


        
    </>
}
