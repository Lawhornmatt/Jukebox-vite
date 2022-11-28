const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    user: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
