const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    darkmode: Boolean!
    email_vis: Boolean!
    hosted_room: Room
  }

  type Room {
    _id: ID!
    host_id: User
    room_name: String!
    current_vid: String!
    vid_queue: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    rooms: [Room]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
