const { prisma } = require('../prisma/client');

export default {
  Query: {
    item: (parent, args) => {
      return prisma.item.findFirst({
        where: { id: Number(args.id) },
      });
    },

    items: (parent, args) => {
      return prisma.item.findMany({});
    },
  },

  Mutation: {
    createItem: (parent, args) => {
      return prisma.item.create({
        data: {
          closet: args.data.closet,
          season: args.data.season,
          apparelType: args.data.apparelType,
          shortDesc: args.data.shortDesc,
          longDesc: args.data.longDesc,
          size: args.data.size,
          user: args.userEmail && {
            connect: { email: args.userEmail },
          },
        },
      });
    },
  },

  Item: {
    id: (parent) => parent.id,
    user: (parent) => parent.userId,
    closet: (parent) => parent.closet,
    season: (parent) => parent.season,
    apparelType: (parent) => parent.apparelType,
    shortDesc: (parent) => parent.shortDesc,
    longDesc: (parent) => parent.longDesc,
    size: (parent) => parent.size,
    user: (parent, args) => {
      return prisma.item
        .findUnique({
          where: { id: parent.id },
        })
        .user();
    },
  },
};
