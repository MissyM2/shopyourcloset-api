import { PrismaClient } from '@prisma/client'
import { sign, verify } from 'jsonwebtoken'
import { APP_SECRET, Errors, errors, tokens } from './constants'
import { Context, Token } from '../types'

export function getUserEmail(ctx: Context): string {
  const Authorization = ctx.req.get('Authorization')
  console.log('getUserEmail: Authorization', Authorization)
  if (Authorization) {
    const email = Authorization.replace('Bearer ', '')
    return email
  }
  return null
}

export const handleError = (error: any) => {
  // add any other logging mechanism here e.g. Sentry
  throw error
}

export const returnError = (error: keyof Errors) => {
  return errors[error]
}

export const generateAccessToken = (userId: number) => {
  const accessToken = sign(
    {
      userId,
      type: tokens.access.name,
      timestamp: Date.now(),
    },
    APP_SECRET,
    {
      expiresIn: tokens.access.expiry,
    },
  )

  return accessToken
}

export const prisma = new PrismaClient()

export const createContext = (ctx: any): Context => {
  let userId: number
  try {
    let Authorization = ''
    try {
      // for queries and mutations
      Authorization = ctx.req.get('Authorization')
    } catch (e) {
      // specifically for subscriptions as the above will fail
      Authorization = ctx?.connection?.context?.Authorization
    }
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    console.log('createContext: what is verifiedToken? ', verifiedToken)
    console.log(
      'createContext: what is verifiedToken.userId? ',
      verifiedToken.userId,
    )

    if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name)
      userId = -1
    else userId = verifiedToken.userId
  } catch (e) {
    userId = -1
  }
  return {
    ...ctx,
    prisma,
    userId,
  }
}
