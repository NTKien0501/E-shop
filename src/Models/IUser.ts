// Interface user
export interface IUser {
  //Name
  name?: string

  //Email
  email: string

  //Password
  password: string

  //Confirm password
  confirmPassword: string

  // Phone number
  phone?: string

  //Role user
  isAdmin?: boolean

  // Address
  street?: string

  // Zip code
  zip?: string

  // City
  city?: string
}
