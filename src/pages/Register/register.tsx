import React from 'react'
import { useForm, Resolver } from 'react-hook-form'
import { IUser } from 'src/Models'
// const resolver: Resolver<IUser> = async (values) => {
//   return {
//     values: values.email ? values : {},
//     errors:
//       values.password !== values.confirmPassword
//         ? {
//             confirmPassword: {
//               type: 'checkMatch',
//               message: 'The two passwords do not match'
//             }
//           }
//         : {}
//   }
// }

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUser>()
  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <form onSubmit={onSubmit}>
      <div className='form-content flex flex-col'>
        <div className='title text-lg font-bold text-hover-orange-background'>ĐĂNG KÝ THÀNH VIÊN</div>
        <div className='flex flex-row py-4'>
          <label htmlFor='name' className='mx-6 basis-60 text-right'>
            Name
          </label>
          <input
            className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
            {...register('name')}
            id='name'
          />
        </div>
        <div className='flex flex-row py-4'>
          <label htmlFor='email' className='mx-6 basis-60 text-right'>
            Email Address
          </label>
          <div className='flex flex-col'>
            <input
              {...register('email', { required: true, pattern: /[\w-+.]{1,}@[\w-+]{1,}[.][a-zA-Z]{1,}/g })}
              id='email'
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
            />
            <div className='errors'>
              {errors?.email && errors.email.type === 'required' && (
                <span className='ml-4 text-red-700'>Enter an email address.</span>
              )}
              {errors?.email && errors.email.type === 'pattern' && (
                <span className='break-words text-red-700'>Invalid email format.</span>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-row py-4'>
          <label htmlFor='password' className='mx-6 basis-60 text-right'>
            Login password
          </label>
          <div className='flex flex-col'>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
              {...register('password', {
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}/g
              })}
              id='password'
              type='password'
            />
            <div className='errors'>
              {errors?.password && errors.password.type === 'required' && (
                <span className='ml-4 text-red-700'>Set the login password</span>
              )}
              {errors?.password && errors.password.type === 'pattern' && (
                <span className='break-words text-red-700'>Invalid password format.</span>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-row py-4'>
          <label htmlFor='confirm-password' className='mx-6 basis-60 text-right'>
            Confirm password
          </label>
          <div className='flex flex-col'>
            <input
              className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
              {...register('confirmPassword', {
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}/g
              })}
              id='confirm-password'
              type='password'
            />
            <div className='errors'>
              {errors?.confirmPassword && errors.confirmPassword.type === 'required' && (
                <span className='ml-4 text-red-700'>Enter the login password again.</span>
              )}
              {errors?.confirmPassword && errors.confirmPassword.type === 'pattern' && (
                <span className='break-words text-red-700'>Invalid confirm format.</span>
              )}
              {errors?.confirmPassword && errors.confirmPassword.type === 'checkMatch' && (
                <span className='break-words text-red-700'>{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-row py-4'>
          <label htmlFor='phone' className='mx-6 basis-60 text-right'>
            Phone number
          </label>
          <input
            className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
            {...register('phone')}
            id='phone'
          />
        </div>

        <div className='flex flex-row py-4'>
          <label htmlFor='street' className='mx-6 basis-60 text-right'>
            Address
          </label>
          <input
            className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
            defaultValue=''
            {...register('street')}
            id='street'
          />
        </div>

        <div className='flex flex-row py-4'>
          <label htmlFor='zip' className='mx-6 basis-60 text-right'>
            Zip code
          </label>
          <input
            className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
            defaultValue=''
            {...register('zip')}
            id='zip'
          />
        </div>

        <div className='flex flex-row py-4'>
          <label htmlFor='city' className='mx-6 basis-60 text-right'>
            City
          </label>
          <input
            className='h-8 border border-inherit px-3 invalid:outline-red-700 focus:outline-orange-background'
            defaultValue=''
            {...register('city')}
            id='city'
          />
        </div>
      </div>
      <button
        type='submit'
        className='mt-2 border border-none bg-orange-background text-white hover:bg-hover-orange-background hover:outline-transparent'
      >
        Agree and Register
      </button>
    </form>
  )
}

export default Register
