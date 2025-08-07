import React from 'react'
import SignUpCard from './Components/signup/SignUpCard.jsx'
export default function Signup() {
    return <>
        <section className="min-h-screen bg-[url('./assets/Images/background-gradient-lights.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-300"
        >
            <div className="container">

                <div className=" flex items-center justify-center  py-8">

                    <SignUpCard />

                </div>
            </div>
        </section>
    </>
}
