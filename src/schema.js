const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    updatedAt: String
    createdAt: String
  }

  type Item {
    id: ID!
    user: User!
    closet: ClosetType!
    season: SeasonType!
    color: ColorType!
    apparelType: ApparelType!
    shortDesc: String
    longDesc: String
    size: String!
    updatedAt: String
    createdAt: String
  }

  input UserCreateInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  input ItemCreateInput {
    closet: String!
    season: String!
    apparelType: String!
    shortDesc: String!
    longDesc: String
    size: String!
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    items: [Item!]!
    item(id: ID!): Item
  }
  type Mutation {
    registerUser(data: UserCreateInput!): User!
    createItem(data: ItemCreateInput!, userEmail: String!): Item!
  }
  enum ClosetType {
    MINE
    SHARE
    DONATE
    IDEAL
  }

  enum SeasonType {
    WINTER
    SPRING
    SUMMER
    FALL
  }

  enum ApparelType {
    TOP
    BOTTOM
    OUTERWEAR
    SHOES
    DRESS
    ACCESSORY
    NIGHTWEAR
    SWIMSUIT
  }

  enum ColorType {
    BLACK
    BROWN
    WHITE
    CREAM
    PATTERN
  }
`;

module.exports = {
  typeDefs,
};
