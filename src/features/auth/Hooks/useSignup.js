import { joiResolver } from '@hookform/resolvers/joi';
import { useGoogleLogin } from '@react-oauth/google';
import * as joi from 'joi'
import { useForm } from 'react-hook-form';

export default function useSignup() {
    const genderEnum = { male: 'male', female: 'female' };

    const signupSchema = joi.object().keys({
        fullName: joi.string().min(2).max(20).required(),
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 3, tlds: { allow: ['com', 'net'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required().messages({
            'string.empty': 'Password is required',
            'string.pattern.base': 'Password must contain at least 8 characters, including uppercase, lowercase, and a number',
        }),
        confirmPassword: joi.string().valid(joi.ref("password")).required(),
        phone: joi.string().pattern(new RegExp(/^(002|\+2)?01[0125][0-9]{8}$/)).required().messages({
            'string.empty': 'Phone number is required',
            'string.pattern.base': 'Enter a valid Egyptian phone number (e.g. 01012345678)',
        }),
        gender: joi.string().valid(...Object.values(genderEnum)).required(),

    });


    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: joiResolver(signupSchema)
    })




    return {
        register,
        handleSubmit,
        control,
        errors,
    }
}
