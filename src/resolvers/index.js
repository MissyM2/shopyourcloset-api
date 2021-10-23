const { prisma } = require('../prisma/client');
const { Query } = require('./query.js');
const { Mutation } = require('./mutation.js');

const User = {
  id: (parent, args, context, info) => parent.id,
  email: (parent) => parent.email,
  firstName: (parent) => parent.firstName,
  lastName: (parent) => parent.lastName,
  password: (parent) => parent.password,
};

const Item = {
  id: (parent) => parent.id,
  user: (parent) => parent.userId,
  closet: (parent) => parent.closet,
  season: (parent) => parent.season,
  apparelType: (parent) => parent.apparelType,
  shortDesc: (parent) => parent.shortDesc,
  longDesc: (parent) => parent.longDesc,
  size: (parent) => parent.size,
};

const resolvers = {
  User,
  Item,
  Query,
  Mutation,
};

module.exports = {
  resolvers,
};
