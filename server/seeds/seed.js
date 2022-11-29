const db = require('../config/connection');
const { User, Room } = require('../models');

const userData = require('./userData.json');
const roomData = require('./roomData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Room.deleteMany({});

  const userbase = await User.insertMany(userData);
  const roombase = await Room.insertMany(roomData);

  console.log('Userbase seeded!');
  process.exit(0);
});
