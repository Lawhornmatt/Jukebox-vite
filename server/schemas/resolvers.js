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
