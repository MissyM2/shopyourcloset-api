import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import itemResolvers from './item';
import launchResolvers from './launch';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  itemResolvers,
  launchResolvers,
];
