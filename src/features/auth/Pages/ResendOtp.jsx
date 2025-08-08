import Resend from "../Components/ResndOtp/Resend.jsx";

export default function ResendOtp() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#6AA7B7] to-[#cccccc] transition-all duration-300">
        <div className="container">
          <div className=" flex items-center justify-center  py-8 pt-30 md:pt-20">
            <Resend />
          </div>
        </div>
      </section>
    </>
  );
}
