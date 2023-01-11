import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from 'src/Models'
import { getRules } from 'src/utils/rules'

function Register() {
  const [errorForm, setErrorForm] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IUser>()

  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
    const password = getValues('password')
    const rePassword = getValues('confirmPassword')

    console.log(data)
  })
  return (
    <div className='mx-auto w-80 pl-1 pr-1 md:w-1/2'>
      <form onSubmit={onSubmit} className='mx-auto'>
        <div className='flex flex-col'>
          <div className='flex flex-row py-2'>
            <label htmlFor='name' className='mr-6 basis-60 text-right'>
              Name
            </label>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background lg:w-1/2'
              {...register('name')}
              id='name'
            />
          </div>
          <div className='flex flex-row py-2'>
            <label htmlFor='email' className='mr-6 basis-60 text-right'>
              Email Address
            </label>
            <div className='flex flex-col lg:w-1/2'>
              <input
                {...register('email', rules.email)}
                id='email'
                className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
              />
              <div className=' mt-1 break-words text-red-700'>
                <span>{errors.email?.message}</span>
              </div>
            </div>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='password' className='mr-6 basis-60 text-right'>
              Login password
            </label>
            <div className='flex flex-col lg:w-1/2'>
              <input
                className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
                {...register('password', rules.password)}
                id='password'
                type='password'
              />
              <div className=' mt-1 break-words text-red-700'>
                <span>{errors.password?.message}</span>
              </div>
            </div>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='confirm-password' className='mr-6 basis-60 text-right'>
              Confirm password
            </label>
            <div className='flex flex-col lg:w-1/2'>
              <input
                className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
                {...register('confirmPassword', {
                  ...rules.confirmPassword
                })}
                id='confirm-password'
                type='password'
              />
              <div className='mt-1 break-words text-red-700'>
                <span>{errors.confirmPassword?.message}</span>
              </div>
            </div>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='phone' className='mr-6 basis-60 text-right'>
              Phone number
            </label>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background lg:w-1/2'
              {...register('phone')}
              id='phone'
            />
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='street' className='mr-6 basis-60 text-right'>
              Address
            </label>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background lg:w-1/2'
              defaultValue=''
              {...register('street')}
              id='street'
            />
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='zip' className='mr-6 basis-60 text-right'>
              Zip code
            </label>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background lg:w-1/2'
              defaultValue=''
              {...register('zip')}
              id='zip'
            />
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='city' className='mr-6 basis-60 text-right'>
              City
            </label>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background lg:w-1/2'
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
