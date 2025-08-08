import { Otptimer } from "otp-timer-ts";
import { useNavigate } from "react-router-dom";

export function OTPWithTimer() {
  const navigate = useNavigate()
  const handleResend = () => {
    navigate("/resend-otp");
  };

  return (
    <Otptimer
      onResend={handleResend}
      minutes={2}
      seconds={0} // 2-minute countdown
      text="OTP will expire after :"
      ButtonText="please enter resent otp ⬇️ "

      timerClass="text-xl font-semibold text-mint-green"
    />
  );
}
