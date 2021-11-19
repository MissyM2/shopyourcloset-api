import { inputObjectType, objectType } from 'nexus'
export const signupInput = inputObjectType({
  name: 'signupInput',
  definition(t) {
    t.nonNull.string('firstName')
    t.nonNull.string('lastName')
    t.nonNull.string('email')
    t.nonNull.string('password')
  },
})

export const resetPasswordInput = inputObjectType({
  name: 'resetPasswordInput',
  definition(t) {
    t.nonNull.string('resetPasswordToken')
    t.nonNull.string('newPassword')
  },
})

export const loginInput = inputObjectType({
  name: 'loginInput',
  definition(t) {
    t.nonNull.string('email')
    t.nonNull.string('password')
  },
})

export const facebookLoginInput = inputObjectType({
  name: 'facebookLoginInput',
  definition(t) {
    t.nonNull.string('userId')
    t.nonNull.string('accessToken')
  },
})

export const googleLoginInput = inputObjectType({
  name: 'googleLoginInput',
  definition(t) {
    t.nonNull.string('idToken')
  },
})

export const updateUserInput = inputObjectType({
  name: 'UpdateUserInput',
  definition(t) {
    t.string('email')
    t.string('password')
    t.string('name')
  },
})

export const deleteUserInput = inputObjectType({
  name: 'DeleteUserInput',
  definition(t) {
    t.nonNull.list.id('id')
  },
})

export const messagePayload = objectType({
  name: 'MessagePayload',
  definition(t) {
    t.nonNull.string('message')
  },
})

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.nonNull.string('token')
    t.nonNull.field('user', {
      type: 'User',
    })
  },
})
