const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    age: Int
    email: String!
  }

  type Query {
    users: [User!]!
    user(email: String!): User!
  }

  input CreateUserInput {
    name: String!
    age: Int
    email: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;

module.exports = { typeDefs };
