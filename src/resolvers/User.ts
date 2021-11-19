import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id')
    t.string('firstName')
    t.string('lastName')
    t.nonNull.string('email')
    t.nonNull.boolean('isAdmin')
  },
})
