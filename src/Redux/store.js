import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/Redux/slices/auth.js'; // adjust the path if needed
import confirmEmailReducer from '@/features/auth/Redux/slices/confirmEmail.js'; // adjust the path if needed
import resendOtpReducer from '@/features/auth/Redux/slices/resentOtp.js'; // adjust the path if needed
import loginReducer from '@/features/auth/Redux/slices/login.js'; // adjust the path if needed

export const store = configureStore({
    reducer: {
        signup: authReducer,
        login: loginReducer,
        confirmEmail: confirmEmailReducer, 
        resendOtp: resendOtpReducer,
    },
})


