import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as joi from 'joi'
import { useDispatch } from 'react-redux';
import { loginGoogleThunk } from '../Redux/slices/login.js';

export default function useLogin() {
    const dispatch = useDispatch();
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



    //logi google 
    const loginGoogle = (idToken) => {
        dispatch(loginGoogleThunk(idToken));
    };

    // const loginGoogle = async (idToken) => {
    //     try {
    //         await axios.post(
    //             "http://localhost:3000/auth/login/gmail",
    //             {
    //                 idToken: idToken,
    //             }
    //         );
    //     } catch (error) {
    //         toast.error("Google login failed. Please try again.");
    //         console.log("login failed:", error);

    //     }
    // }





    return {
        register,
        handleSubmit,
        formState: { errors },
        loginGoogle
    }
}
