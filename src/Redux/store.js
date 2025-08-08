import { configureStore } from '@reduxjs/toolkit'
import signupReducer from '@/features/auth/Redux/slices/signup.js'; // adjust the path if needed
import confirmEmailReducer from '@/features/auth/Redux/slices/confirmEmail.js'; // adjust the path if needed
import resendOtpReducer from '@/features/auth/Redux/slices/resentOtp.js'; // adjust the path if needed
import loginReducer from '@/features/auth/Redux/slices/login.js'; // adjust the path if needed
// import authReducer from '@/Redux/slices/auth.js'
export const store = configureStore({
    reducer: {
        // auth: authReducer,
        signup: signupReducer,
        login: loginReducer,
        confirmEmail: confirmEmailReducer,
        resendOtp: resendOtpReducer,
    },
})


