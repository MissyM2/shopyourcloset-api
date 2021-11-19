export const tokens = {
  access: {
    name: 'ACCESS_TOKEN',
    expiry: '1d',
  },
}

export const APP_SECRET = process.env.APP_SECRET

export const isDev = () => process.env.NODE_ENV === 'development'

export const errors = {
  invalidUser: {
    __typename: 'InvalidUser',
    message: 'Invalid username or password',
  },
  userAlreadyExists: {
    __typename: 'UserAlreadyExists',
    message: 'User already exists!',
  },
  /*
  invalidUser: {
    __typename: 'InvalidUser',
    message: 'Invalid Username or password',
  },
  UserAlreadyExists: {
    __typename: 'UserAlreadyExists',
    message: 'User already exists!',
  },
  invalidAdmin: {
    __typename: 'InvalidAdmin',
    message: 'Invalid Adminname or password',
  },
  adminAlreadyExists: {
    __typename: 'AdminAlreadyExists',
    message: 'Admin already exists!',
  },
  */
}

export type Errors = typeof errors
