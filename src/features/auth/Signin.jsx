import LoginCard from './Components/signinComp/LoginCard.jsx'

export default function Signin() {
    return (
      <>
        <section className="min-h-screen bg-gradient-to-b from-[#6AA7B7] to-[#cccccc] transition-all duration-300">
          <div className="container">
            <div className="relative min-h-screen flex items-center justify-center">
              <div className="relative z-10 w-full max-w-lg">
                <LoginCard />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

// bg-[url('./assets/Images/backgroundBg.jpg')] bg-cover bg-center bg-no-repeat