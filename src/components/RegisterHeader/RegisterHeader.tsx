import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterHeader() {
  return (
    <header className=' mx-auto my-0 h-24 max-w-7xl py-5'>
      <nav className='flex items-end'>
        <Link to='/'>
          <img className='h-5 lg:h-8' src='/src/imgs/logo.png' alt='' />
        </Link>
        <div className='ml-5 text-end text-xl lg:text-2xl'>Đăng Ký</div>
      </nav>
    </header>
  )
}
