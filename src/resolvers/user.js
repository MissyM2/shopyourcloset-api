const { prisma } = require('../prisma/client');

export default {
  Query: {
    user: (parent, args) => {
      const id = +args.id;
      return prisma.user.findUnique({
        where: {
          id,
        },
        include: { items: true },
      });
    },

    users: (parent, args) => {
      return prisma.user.findMany({
        include: { items: true },
      });
    },
  },

  Mutation: {
    registerUser: (parent, args) => {
      return prisma.user.create({
        data: {
          email: args.data.email,
          firstName: args.data.firstName,
          lastName: args.data.lastName,
          password: args.data.password,
        },
      });
    },
  },

  User: {
    id: (parent, args, context, info) => parent.id,
    email: (parent) => parent.email,
    firstName: (parent) => parent.firstName,
    lastName: (parent) => parent.lastName,
    password: (parent) => parent.password,
  },
};
