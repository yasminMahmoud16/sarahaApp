import LeftSec from '@/Components-folder/signup/leftSec.jsx'
import RightSec from '@/Components-folder/signup/rightSec.jsx'
import SignUpCard from '@/Components-folder/signup/SignUpCard.jsx'
import React from 'react'

export default function Signup() {
    return <>
        <section className='bg-gradient-to-br from-soft-gray via-[#d5cbf1]  min-h-screen'>
            <div className="container">

            <div className=" flex items-center justify-center  py-8">
            
            <SignUpCard/>
                {/* <div className="grid grid-cols-6">
                    <div className='col-span-3'>
                        <div className="right flex flex-col gap-4 items-center justify-center m-50 ">
                            <LeftSec/>
                        </div>

                    </div>
                    <div className='col-span-3'>
                        
                        <div className="   min-h-screen">
                            <RightSec/>
                        </div>
                    </div>

                </div> */}
            </div>
            </div>
        </section>
    </>
}
