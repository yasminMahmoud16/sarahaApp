import axios from 'axios'
import { useState } from 'react'

export default function useForgetPassword() {

    const [errMsg, setErrMsg] = useState(null);
    const [succMsg, setSuccMsg] = useState(null);
    const forgetPasswordApi = 'http://localhost:3000/auth/send-forget-password';
    const verifyforgetPasswordApi = 'http://localhost:3000/auth/verify-forget-password';
    const resetPasswordApi = 'http://localhost:3000/auth/reset-forget-password';


    const sendForgetPassword = async (email) => {

        setErrMsg(null);
        setSuccMsg(null);
        try {
            const res = await axios.patch(forgetPasswordApi, { email });
            console.log(res.data);
            setSuccMsg(res.data.message);
            return res.data
        } catch (error) {
            // const message = error.response?.data?.message || 'forget password failed.';
            const message = error.response?.data?.data?.[0]?.[0]?.message
                || error.response?.data?.message
                || 'Forget password failed.';
            setErrMsg(message)
            return message;
        }
    }



    const verifyForgetCode = async (userData) => {
        setErrMsg(null);
        setSuccMsg(null);
        try {
            const res = await axios.patch(verifyforgetPasswordApi, userData);
            console.log(res.data);
            setSuccMsg(res.data.message);

            return res.data
        } catch (error) {
            const message = error.response?.data?.data?.[0]?.[0]?.message
                || error.response?.data?.message || 'verify forget password failed.';
            setErrMsg(message)
            return message;
        }





    }
    const resetPassword = async (userData) => {
        setErrMsg(null);
        setSuccMsg(null);
        try {
            const res = await axios.patch(resetPasswordApi, userData);
            console.log(res.data);
            setSuccMsg(res.data.message);

            return res.data
        } catch (error) {
            const message = error.response?.data?.data?.[0]?.[0]?.message
                || error.response?.data?.message || 'reset password failed.';
            setErrMsg(message)
            return message;
        }





    }
    return {
        errMsg,
        succMsg,
        sendForgetPassword,
        verifyForgetCode,
        resetPassword
    }
}
