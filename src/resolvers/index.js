import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import itemResolvers from './item';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, userResolvers, itemResolvers];
