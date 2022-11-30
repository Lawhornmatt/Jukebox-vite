const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  avatar: {
    type: Number,
    default: 1
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  darkmode: {
    type: Boolean,
    required: true,
    default: false,
  },
  email_vis: {
    type: Boolean,
    required: true,
    default: false,
  },
  hosted_room: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  }
});

const User = model('User', userSchema);

module.exports = User;
