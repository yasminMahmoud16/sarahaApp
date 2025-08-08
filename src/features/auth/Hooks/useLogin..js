import { joiResolver } from '@hookform/resolvers/joi';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import * as joi from 'joi'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function useLogin() {

    const navigate = useNavigate();
    const loginSchema = joi.object().keys({
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 3, tlds: { allow: ['com', 'net'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required().messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must contain at least 8 characters, including uppercase, lowercase, and a number',
        }),
    });


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: joiResolver(loginSchema)
    })



    //signup google 
    const loginGoogle = async (idToken) => {
        try {
            await axios.post(
                "http://localhost:3000/auth/login/gmail",
                {
                    idToken: idToken,
                }
            );
            navigate("/");
        } catch (error) {
            toast.error("Google login failed. Please try again.");
            console.log("login failed:", error);

        }
    }
    // const loginGoogle = useGoogleLogin({
    //     onSuccess: async (credentialResponse) => {
    //         console.log(credentialResponse);
    //         const accessToken = credentialResponse;
    //         try {
    //             const res = await axios.post('http://localhost:3000/auth/signup/gmail',{idToken:accessToken})
    //             console.log('User Info:', res.data);
    //             navigate('/');
    //         } catch (error) {
    //             console.log('Failed to fetch user info:', error);
    //         }


    //         // you can decode the JWT if needed
    //     },
    //     onError: () => {
    //         console.log('Login Failed');
    //     },
    // });




    
    return {
        register,
        handleSubmit,
        formState: { errors },
        loginGoogle
    }
}
