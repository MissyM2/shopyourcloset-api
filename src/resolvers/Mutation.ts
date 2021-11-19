import { mutationType, arg, stringArg, nonNull } from 'nexus'
import generateHashedPassword from '../utils/generateHashedPassword'
import mailService from '../services/sendMail'
import { sign, decode, verify } from 'jsonwebtoken'

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'MessagePayload',
      args: {
        signupInput: nonNull(arg({ type: 'signupInput' })),
      },
      async resolve(_parent, { firstName, lastName, email, password }, ctx) {
        try {
          let userCount = null
          userCount = ctx.prisma.user.count({
            where: {
              email: email,
            },
          })

          if (userCount) {
            throw new Error('Email is already associated with another user')
          }

          const hashedPassword = await generateHashedPassword(password)
          const token = sign(
            {
              firstName,
              lastName,
              email,
              password: hashedPassword,
            },
            process.env.JWT_ACCOUNT_ACTIVATION,
            {
              expiresIn: '10m',
            },
          )

          const html = mailService.activationEmail(token)
          await mailService.sendEmail(
            process.env.EMAIL_FROM,
            email,
            'Account activation',
            html,
          )
          return {
            message: `Email has been sent to ${email}.  Follow the instruction to activate your account`,
          }
        } catch (error) {
          throw new Error(error.message)
        }
      },
    })
  },
})
