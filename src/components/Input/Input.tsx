import React from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errMessage?: string
  placeholder?: string
  className?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions
  id: string
}
export default function Input({ type, errMessage, placeholder, className, name, register, rules, id }: Props) {
  return (
    <div className={className}>
      <input
        className='h-8 border border-inherit px-3 focus:outline-orange-background'
        {...register(name, rules)}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <div className=' mt-1 break-words text-red-700'>
        <span>{errMessage}</span>
      </div>
    </div>
  )
}
