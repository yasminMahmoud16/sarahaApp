import { joiResolver } from '@hookform/resolvers/joi';
import { useGoogleLogin } from '@react-oauth/google';
import * as joi from 'joi'
import { useForm } from 'react-hook-form';

export default function useLogin() {

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
    const loginGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            // you can decode the JWT if needed
        },
        onError: () => {
            console.log('Login Failed');
        },
    });




    
    return {
        register,
        handleSubmit,
        formState: { errors },
        loginGoogle
    }
}
