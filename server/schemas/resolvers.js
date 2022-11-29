const { User, Room } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    room: async () => {
      return Room.find({});
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
  },
};

module.exports = resolvers;
