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

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  input UserInputUpdate {
    email: String
    firstName: String
    lastName: String
    password: String
  }

  extend type Query {
    users: [User!]
    user(id: ID!): User
  }

  extend type Mutation {
    registerUser(data: UserInput!): User
    updateUser(data: UserInputUpdate, id: ID!): User!
  }
`;
