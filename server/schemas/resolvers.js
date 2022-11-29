const { User, Room } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('hosted_room');
      
      /*.populate({
        path: 'hosted_room',
        populate: 'room'
      });*/
    },
    rooms: async () => {
      return await Room.find({}).populate('host_id')
      
      /*.populate({
        path: 'host_id',
        populate: 'user'
      });*/ 
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
