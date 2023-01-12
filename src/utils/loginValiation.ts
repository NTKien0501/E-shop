import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password']?: RegisterOptions }
export const getValidation = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Please enter your email address or member ID.'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Please enter your password'
    }
  }
})
