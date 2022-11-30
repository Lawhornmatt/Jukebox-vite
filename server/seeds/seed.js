const db = require('../config/connection');
const { User, Room } = require('../models');

const userData = require('./userData.json');
const roomData = require('./roomData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Room.deleteMany({});

  const userbase = await User.insertMany(userData);
  const roombase = await Room.insertMany(roomData);

  for (newUser of userbase) {
    const randoAvatar = Math.ceil(Math.random() * 9)
    newUser.avatar = randoAvatar;
    await newUser.save();
  }

  for (newRoom of roombase) {
    // Starts at the first seeded room and adds the first user, then the second room and adds the second listed user, and so forth until no more rooms. 
    const sequenceUser = userbase[roombase.indexOf(newRoom)];
    newRoom.host_id = sequenceUser._id;
    await newRoom.save();

    // Gotta add the data on the user, too
    sequenceUser.hosted_room = newRoom._id;
    await sequenceUser.save();
  }

  console.log('Userbase seeded!');
  process.exit(0);
});
