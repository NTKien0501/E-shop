import React, { useState } from 'react'
import { useForm, Resolver } from 'react-hook-form'
import { IUser } from 'src/Models'

function Register() {
  const [errorForm, setErrorForm] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IUser>()
  const onSubmit = handleSubmit((data) => {
    const password = getValues('password')
    const rePassword = getValues('confirmPassword')
    if (password !== rePassword) {
      setErrorForm('The two passwords do not match')
    }
    console.log(data)
  })
  return (
    <div className='register mx-auto w-80 md:w-1/2'>
      <form onSubmit={onSubmit} className='mx-auto'>
        <div className='flex flex-col'>
          <div className='flex flex-row py-4'>
            <label htmlFor='name' className='mr-6 basis-60 text-right'>
              Name
            </label>
            <input
              className='h-8 border border-inherit px-3 lg:w-1/2 invalid:outline-red-700 focus:outline-orange-background'
              {...register('name')}
              id='name'
            />
          </div>
          <div className='flex flex-row py-4'>
            <label htmlFor='email' className='mr-6 basis-60 text-right'>
              Email Address
            </label>
            <div className='flex flex-col lg:w-1/2'>
              <input
                {...register('email', { required: true, pattern: /[\w-+.]{1,}@[\w-+]{1,}[.][a-zA-Z]{1,}/g })}
                id='email'
                className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
              />
              <div className='break-words text-red-700'>
                {errors?.email && errors.email.type === 'required' && <span>Enter an email address.</span>}
                {errors?.email && errors.email.type === 'pattern' && <span>Invalid email format.</span>}
              </div>
            </div>
          </div>

          <div className='flex flex-row py-4'>
            <label htmlFor='password' className='mr-6 basis-60 text-right'>
              Login password
            </label>
            <div className='flex flex-col lg:w-1/2'>
              <input
                className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
                {...register('password', {
                  required: true,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}/g
                })}
                id='password'
                type='password'
              />
              <div className='break-words text-red-700'>
                {errors?.password && errors.password.type === 'required' && <span>Set the login password</span>}
                {errors?.password && errors.password.type === 'pattern' && <span>Invalid password format.</span>}
              </div>
            </div>
          </div>

          <div className='flex flex-row py-4'>
            <label htmlFor='confirm-password' className='mr-6 basis-60 text-right'>
              Confirm password
            </label>
            <div className='flex flex-col lg:w-1/2'>
              <input
                className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
                {...register('confirmPassword', {
                  required: true,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}/g
                })}
                id='confirm-password'
                type='password'
              />
              <div className='break-words text-red-700'>
                {errors?.confirmPassword && errors.confirmPassword.type === 'required' && (
                  <span>Enter the login password again.</span>
                )}
                {errors?.confirmPassword && errors.confirmPassword.type === 'pattern' && (
                  <span>Invalid confirm format.</span>
                )}
                {!!errorForm && <span>{errorForm}</span>}
              </div>
            </div>
          </div>

          <div className='flex flex-row py-4'>
            <label htmlFor='phone' className='mr-6 basis-60 text-right'>
              Phone number
            </label>
            <input
              className='h-8 border border-inherit px-3 lg:w-1/2 invalid:outline-red-700 focus:outline-orange-background'
              {...register('phone')}
              id='phone'
            />
          </div>

          <div className='flex flex-row py-4'>
            <label htmlFor='street' className='mr-6 basis-60 text-right'>
              Address
            </label>
            <input
              className='h-8 border border-inherit px-3 lg:w-1/2 invalid:outline-red-700 focus:outline-orange-background'
              defaultValue=''
              {...register('street')}
              id='street'
            />
          </div>

          <div className='flex flex-row py-4'>
            <label htmlFor='zip' className='mr-6 basis-60 text-right'>
              Zip code
            </label>
            <input
              className='h-8 border border-inherit px-3 lg:w-1/2 invalid:outline-red-700 focus:outline-orange-background'
              defaultValue=''
              {...register('zip')}
              id='zip'
            />
          </div>

          <div className='flex flex-row py-4'>
            <label htmlFor='city' className='mr-6 basis-60 text-right'>
              City
            </label>
            <input
              className='h-8 border border-inherit px-3 lg:w-1/2 invalid:outline-red-700 focus:outline-orange-background'
              defaultValue=''
              {...register('city')}
              id='city'
            />
          </div>
          <button
            type='submit'
            className='mx-auto mb-10 mt-4 h-10 w-1/2 border border-none bg-orange-background px-1 text-white hover:bg-hover-orange-background hover:outline-transparent'
          >
            Agree and Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
