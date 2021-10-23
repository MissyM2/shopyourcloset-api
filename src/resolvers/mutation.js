const { prisma } = require('../prisma/client');

const Mutation = {
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

  createItem: (parent, args) => {
    console.log(parent, args);
    return prisma.item.create({
      data: {
        user: args.data.userId,
        closet: args.data.closet,
        season: args.data.season,
        apparelType: args.data.apparelType,
        shortDesc: args.data.shortDesc,
        longDesc: args.data.longDesc,
        size: args.data.size,
      },
    });
  },
};

module.exports = {
  Mutation,
};
