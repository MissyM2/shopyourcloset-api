const { prisma } = require('../prisma/client');

const Query = {
  user: (parent, args) => {
    return prisma.user.findFirst({
      where: { id: Number(args.id) },
    });
  },

  users: (parent, args) => {
    return prisma.user.findMany({});
  },

  item: (parent, args) => {
    return prisma.item.findFirst({
      where: { id: Number(args.id) },
    });
  },

  items: (parent, args) => {
    return prisma.item.findMany({});
  },
};

module.exports = {
  Query,
};
