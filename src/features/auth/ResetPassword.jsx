import Reset from './Components/ForgetPassword/Reset.jsx';
import Resend from './Components/ResndOtp/Resend.jsx'

export default function ResetPassword() {
  return (
    <>
      <section
        className="min-h-scree bg-gradient-to-b from-[#6AA7B7] to-[#cccccc] transition-all duration-300"
      >
        <div className="container">
          <div className=" flex items-center justify-center  py-8 pt-30 md:pt-20">
            <Reset />
          </div>
        </div>
      </section>
    </>
  );
}
