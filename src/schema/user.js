const { gql } = require('apollo-server-express');

export default gql`
  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    items: [Item]
    updatedAt: String
    createdAt: String
  }

  input UserCreateInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  extend type Query {
    users: [User!]
    user(id: ID!): User
  }

  extend type Mutation {
    registerUser(data: UserCreateInput!): User!
  }
`;
