import React from 'react'
import poster from '../../assets/poster.webp'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import linkedin from '../../assets/in.png'
import twitter from '../../assets/twitter.png'
import Input from 'src/components/Input'
import { IUser } from 'src/Models'
import { useForm } from 'react-hook-form'
import { getValidation } from 'src/utils/loginValiation'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IUser>()
  const validation = getValidation()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className=' min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${poster})` }}>
      <div
        className='mt-20 container float-right mr-7  flex w-10/12 overflow-hidden bg-white py-10 drop-shadow-md lg:mr-36 lg:w-4/12' /* style={{backgroundColor: 'lightblue'}} */
      >
        <div className='relative z-10 mx-auto w-full px-4'>
          <div>
            <form action='#' onSubmit={onSubmit}>
              <div>
                <label htmlFor='email-address' className='text-sm'>
                  Account:
                </label>
                <Input
                  type='text'
                  name='email'
                  register={register}
                  errMessage={errors.email?.message}
                  id='email-address'
                  rules={validation.email}
                  className='w-96 lg:w-4/12'
                ></Input>
              </div>
              <div className=' mt-3'>
                <label htmlFor='password' className=' text-sm'>
                  Password:
                </label>
                <span>
                  <a href='12312' className=' float-right text-sm text-cyan-600'>
                    Forgot password ?
                  </a>
                </span>
                <Input
                  type='password'
                  name='password'
                  register={register}
                  className='w-full'
                  errMessage={errors.password?.message}
                  id='password'
                  rules={validation.password}
                ></Input>
              </div>
              <div className=' text-sm'>
                <input type='checkbox' className=' mr-3 mt-5' />
                <span>Stay sigined in</span>
              </div>
              <div className=' mt-3'>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center  border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                >
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                  Sign in
                </button>
              </div>
              <div className='mt-3'>
                <span>
                  <a href='12312' className=' text-sm  text-cyan-600'>
                    Moblie number sign in
                  </a>
                </span>
                <span>
                  <a href='12312' className=' float-right text-sm text-cyan-600'>
                    Join for free
                  </a>
                </span>
              </div>
              <hr className='mt-3' />
              <div className='mt-3'>
                <span className='mr-4 text-sm'>Sign in with:</span>
                <span>
                  <a href='31231'>
                    <img
                      className=' mr-4 inline-block h-6 w-6 lg:h-8 lg:w-8  '
                      src={facebook}
                      alt='Sign in with Facebook'
                    />
                  </a>
                  <a href='1321'>
                    <img
                      className=' mr-4 inline-block h-6 w-6 lg:h-8 lg:w-8  '
                      src={google}
                      alt='Sign in with Google'
                    />
                  </a>
                  <a href='12312'>
                    <img
                      className=' mr-4 inline-block h-6 w-6 lg:h-8 lg:w-8  '
                      src={linkedin}
                      alt='Sign in with Linkedin'
                    />
                  </a>
                  <a href='12312'>
                    <img
                      className=' mr-4 inline-block h-6 w-6 lg:h-8 lg:w-8  '
                      src={twitter}
                      alt='Sign in with Twitter'
                    />
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
