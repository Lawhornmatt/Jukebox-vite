const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    avatar: Int!
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
    current_vid: String
    vid_queue: [String]
    messages: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    find_user(email: String!): User
    rooms: [Room]
    find_room(id: ID!): Room
    
  }

  type Mutation {

    createUser(name: String!, email: String!, password: String!): User

    createRoom(host_id: ID!, room_name: String!): Room

    destroyRoom(ID: ID!): Boolean

    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addVidQueue(ID: ID!, ytid: String!): Boolean

    loadNextVid(ID: ID!): Boolean
  }
`;

module.exports = typeDefs;

// addVidQueue(ID: ID!, ytid: String!): Room