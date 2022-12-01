const { User, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
    
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);
      

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
   
    // Removed since darkmode is being saved in browser currently,
    // Kept in comment because of the interesting update with aggregation pipeline found here:
    // https://stackoverflow.com/questions/61104727/toggle-a-boolean-value-with-mongodb
    /*
    changeDarkmode: async (parent, { ID }) => {
      return await User.updateOne(
        { _id: ID },
        [
          { $set: { darkmode: { $not: "$darkmode" } } }
        ]
      )
    },
    */

    createRoom: async (parent, { host_id, room_name }) => {

      let res = await Room.create({ 
        host_id, 
        room_name 
      });

      await User.updateOne(
        { _id: host_id },
        { hosted_room: res.id}
      );

      return {
        id: res.id,
        ...res._doc
      }
    },

    destroyRoom: async (parent, { ID }) => {

      await User.updateOne(
        { hosted_room: ID },
        { hosted_room: null }
      );

      return (await Room.deleteOne({ _id: ID })).deletedCount;
    },
  },
};

module.exports = resolvers;
