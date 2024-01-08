'use client';

import React, { useCallback, useState } from 'react'
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type VARIANT = 'Login' | 'Register'

function AuthForm() {

    const [variant, setVariant] = useState<VARIANT>('Login');
    const [isloading, setIsLoading] = useState(false);

    const toglleVariant = useCallback(() => {
        if(variant === 'Login' ) {
            setVariant('Register');
        } else {
            setVariant('Login');
        }

    }, [variant]);

    const { register , handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        if(variant === 'Login') {
            // Login
        }

        if(variant === 'Register') {
            // Register
        }
    }

    const socialAction = (action: string) => {

    }


    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-m-md'>

        </div>
    )
}

export default AuthForm