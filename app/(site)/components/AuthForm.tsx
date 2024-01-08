'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/input';
import React, { useCallback, useState } from 'react'
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import {BsGithub, BsGoogle} from 'react-icons/bs';

type VARIANT = 'Login' | 'Register'

function AuthForm() {

    const [variant, setVariant] = useState<VARIANT>('Login');
    const [isloading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
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
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>

                <form className='space-y-6
                'onSubmit={handleSubmit(onSubmit)}>

                    {variant === 'Register' && (
                        <Input id='name' label='Name' register={register} errors={errors}/>
                    )} 

                    <Input id='email' label='Email' register={register} errors={errors}/>

                    <Input id='password' label='Password' register={register} errors={errors}/>
                    
                    <div>
                        <Button
                        disabled={isloading}
                        fullWidth
                        type='submit'
                        >
                            {variant === 'Login' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>

                <div className='mt-6'>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-gray-300'/>
                            </div>

                            <div className='relative flex justify-center text-center'>
                                <span className='bg-white px-2 text-gray-500'>
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className='mt-6 flex gap-3'>
                            <AuthSocialButton 
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                            />

                            <AuthSocialButton 
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                            />
                        </div>
                </div>

                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                        <div>
                            {variant === 'Login' ? 'New to Messenger' : 'Already Registered'}?
                        </div>

                        <div
                        onClick={toggleVariant}
                        className='underline cursor-pointer'
                        >
                            {variant === 'Login' ? 'Create an account' : 'Log in'}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm