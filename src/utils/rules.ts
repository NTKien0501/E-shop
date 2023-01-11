import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirmPassword']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /[\w-+.]{1,}@[\w-+]{1,}[.][a-zA-Z]{1,}/g,
      message: 'Email is not valid'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    minLength: {
      value: 5,
      message: 'Password must be more than 5 characters'
    },
    maxLength: {
      value: 160,
      message: 'Password must be less than 160 characters'
    }
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Password is required'
    },
    minLength: {
      value: 5,
      message: 'Password must be more than 3 characters'
    },
    maxLength: {
      value: 160,
      message: 'Password must be less than 160 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Re-enter a mismatched password'
        : undefined
  }
})
