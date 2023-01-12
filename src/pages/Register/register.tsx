import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from 'src/Models'
import { getRules } from 'src/utils/rules'
import Input from 'src/components/Input'

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IUser>()

  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
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
            <Input type='text' name='name' register={register} className='flex flex-col lg:w-1/2' id='name'></Input>
          </div>
          <div className='flex flex-row py-2'>
            <label htmlFor='email' className='mr-6 basis-60 text-right'>
              Email Address
            </label>
            <Input
              type='text'
              name='email'
              register={register}
              className='flex flex-col lg:w-1/2'
              rules={rules.email}
              errMessage={errors.email?.message}
              id='email'
              placeholder='Please set the email as the login name'
            ></Input>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='password' className='mr-6 basis-60 text-right'>
              Login password
            </label>
            <Input
              type='password'
              name='password'
              register={register}
              className='flex flex-col lg:w-1/2'
              rules={rules.password}
              errMessage={errors.password?.message}
              id='password'
              placeholder='Set the login password'
            ></Input>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='confirm-password' className='mr-6 basis-60 text-right'>
              Confirm password
            </label>
            <Input
              type='password'
              name='confirmPassword'
              register={register}
              className='flex flex-col lg:w-1/2'
              rules={rules.confirmPassword}
              errMessage={errors.confirmPassword?.message}
              id='confirm-password'
              placeholder='Enter the login password again'
            ></Input>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='phone' className='mr-6 basis-60 text-right'>
              Phone number
            </label>
            <Input type='text' name='phone' register={register} className='flex flex-col lg:w-1/2' id='phone'></Input>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='street' className='mr-6 basis-60 text-right'>
              Address
            </label>
            <Input type='text' name='street' register={register} className='flex flex-col lg:w-1/2' id='street'></Input>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='zip' className='mr-6 basis-60 text-right'>
              Zip code
            </label>
            <Input type='text' name='zip' register={register} className='flex flex-col lg:w-1/2' id='zip'></Input>
          </div>

          <div className='flex flex-row py-2'>
            <label htmlFor='city' className='mr-6 basis-60 text-right'>
              City
            </label>
            <Input type='text' name='city' register={register} className='flex flex-col lg:w-1/2' id='city'></Input>
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
