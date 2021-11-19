import { asNexusMethod } from 'nexus'
//import * as Models from './models'
import { Mutation } from './Mutation'
import { Query } from './Query'
import * as User from './User'
import {
  AuthPayload,
  signupInput,
  loginInput,
  facebookLoginInput,
  googleLoginInput,
  updateUserInput,
  deleteUserInput,
  messagePayload,
  resetPasswordInput,
} from './Auth'
import { DateTimeResolver } from 'graphql-scalars'

const DateTime = asNexusMethod(DateTimeResolver, 'date')
/*
export const resolvers = {
  ...Models,
  Query,
  Mutation,
  DateTime,
}
*/

export const resolvers = {
  Query,
  Mutation,
  User,
  AuthPayload,
  facebookLoginInput,
  googleLoginInput,
  messagePayload,
  signupInput,
  resetPasswordInput,
  loginInput,
  updateUserInput,
  deleteUserInput,
}
