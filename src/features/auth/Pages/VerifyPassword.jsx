import Verify from "../Components/ForgetPassword/Verify.jsx";

export default function VerifyPassword() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#6AA7B7] to-[#cccccc] transition-all duration-300">
        <div className="container">
          <div className=" flex items-center justify-center  py-8 pt-30 md:pt-20">
            <Verify />
          </div>
        </div>
      </section>
    </>
  );
}
