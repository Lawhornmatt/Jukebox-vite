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

  type Query {
    users: [User]
    rooms: [Room]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
