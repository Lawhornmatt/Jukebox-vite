const { User, Room } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('hosted_room');
    },
    rooms: async () => {
      return await Room.find({}).populate('host_id')
    }
  },
  Mutation: {
    /*
    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    */
    createRoom: async (parent, { host_id, room_name }) => {

      let res = await Room.create({ host_id, room_name });

      return {
        id: res.id,
        ...res._doc
      }
    },
    destroyRoom: async (parent, { ID }) => {
      return (await Room.deleteOne({ _id: ID })).deletedCount;
    },
  },
};

module.exports = resolvers;
