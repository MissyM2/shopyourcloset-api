const { gql } = require('apollo-server-express');

export default gql`
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

  input ItemCreateInput {
    closet: String!
    season: String!
    apparelType: String!
    shortDesc: String!
    longDesc: String
    size: String!
  }

  extend type Query {
    items: [Item!]!
    item(id: ID!): Item
  }
  extend type Mutation {
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
