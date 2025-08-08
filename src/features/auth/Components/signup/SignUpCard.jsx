
import LeftSec from "./LeftSec.jsx"
import RightSec from "./RightSec.jsx"
import CardWrapper from "@/shared/card/CardWrapper.jsx"

export default function SignUpCard() {
    return <>
        
        <CardWrapper className=" lg:w-4/5 p-0 shadow-xl ">
            
            <div className=" grid grid-cols-1 lg:grid-cols-6 ">
                <div className="hidden lg:block lg:col-span-3  ">
                    <LeftSec/>
                </div>
                <div className="lg:col-span-3">
                    <RightSec/>
                </div>

            </div>

        </CardWrapper>
    </>
}
