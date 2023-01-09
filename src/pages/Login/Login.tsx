import React from 'react'
import poster from '../../assets/poster.webp'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import linkedin from '../../assets/in.png'
import twitter from '../../assets/twitter.png'


export default function Login() {
  return  <div className=' min-h-screen bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${poster})`}}>
  <div className=' container bg-white w-10/12 lg:w-4/12  float-right mr-9 lg:mr-36 mt-28 flex overflow-hidden py-10 drop-shadow-md' /* style={{backgroundColor: 'lightblue'}} */>
    <div className='w-full mx-auto relative z-10 px-7'>
      <div>
        <form action='#'>
        <div>
            <label htmlFor='account' className=' text-sm'>
              Account:
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              placeholder='Email address or number ID'
            />
          </div>
          <div className=' mt-3'>
            <label htmlFor='password' className=' text-sm'>
              Password:
            </label>
            <span>
              <a href='12312' className=' text-sm float-right text-cyan-600'>Forgot password ?</a>
            </span>
            <input
              id='password'
              name='password'
              type='password'
              required
              className='relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              placeholder='Password'
            />
          </div>
          <div className=' text-sm'>
            <input  
            type='checkbox'
            className=' mr-3 mt-5' />
            <span>Stay sigined in</span>
          </div>
          <div className=' mt-3'>
            <button
              type='submit'
              className='group relative flex w-full justify-center  border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:bg-orange-500 focus:ring-offset-2'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              </span>
              Sign in
            </button>
          </div>
          <div className='mt-3'>
            <span>
              <a href='12312' className=' text-sm  text-cyan-600'>Moblie number sign in</a>
            </span>
            <span>
              <a href='12312' className=' text-sm float-right text-cyan-600'>Join for free</a>
            </span>
          </div>
          <hr className='mt-3' />
          <div className='mt-3'>
            <span className='mr-4 text-sm'>
              Sign in with:
            </span>
            <span>
              <a href='31231'><img className=' w-6 lg:w-8 h-6 lg:h-8 mr-4 inline-block  ' src={facebook} alt='Sign in with Facebook' /></a>
              <a href='1321'><img className=' w-6 lg:w-8 h-6 lg:h-8 mr-4 inline-block  ' src={google} alt='Sign in with Google' /></a>
              <a href='12312'><img className=' w-6 lg:w-8 h-6 lg:h-8 mr-4 inline-block  ' src={linkedin} alt='Sign in with Linkedin' /></a>
              <a href='12312'><img className=' w-6 lg:w-8 h-6 lg:h-8 mr-4 inline-block  ' src={twitter} alt='Sign in with Twitter' /></a>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
 </div>
}

