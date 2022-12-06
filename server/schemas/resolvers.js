const { User, Room } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    users: async () => {
      return await User.find({}).populate('hosted_room');
    },

    find_user: async (parent, { email }) => {
      return await User.findOne({ email }).populate('hosted_room');
    },

    rooms: async () => {
      return await Room.find({}).populate('host_id')
    },

    find_room: async (parent, { ID }) => {
      return await Room.findOne({ ID }).populate('host_id');
    },

  },
  Mutation: {
    
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate('hosted_room');

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

    addVidQueue: async (parent, { ID, ytid }) => {
      // return await Room.updateOne(
      //   { _id: ID },
      //   { $push: { 'vid_queue': `${ytid}` }}
      // ).modifiedCount;

      // For WHATEVER REASON the above REFUSED to work, despite multiple updateOne() mutations working fine previously
      // Down below is some bad practice hacked together nonesense that will result in race conditions if we try
      // to update the same doc at the same time
      // But it works.
      try {
        let theRoom = await Room.findOne({ _id: ID });
        theRoom.vid_queue.push(ytid);
        theRoom.save();
        return true;
      } catch {
        return false;
      }
    },

    loadNextVid: async (parent, { ID }) => {

      try {
        let theRoom = await Room.findOne({ _id: ID });
        theRoom.current_vid = theRoom.vid_queue[0];
        theRoom.vid_queue.shift();
        theRoom.save();
        return true;
      } catch {
        return false;
      }
    },
  },
};

module.exports = resolvers;
