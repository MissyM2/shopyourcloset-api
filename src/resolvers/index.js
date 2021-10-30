import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import itemResolvers from './item';
import launchResolvers from './launch';
import weatherRockvilleResolvers from './weatherRockville';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  itemResolvers,
  launchResolvers,
  weatherRockvilleResolvers,
];
