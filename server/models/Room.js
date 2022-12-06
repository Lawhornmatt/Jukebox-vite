const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
  host_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  room_name: {
    type: String,
    required: true,
  },
  /* POST-MVP: A premium user can make private lobbies only friends can join or anyone can join via password?
  password: {
    type: String,
    required: true,
  },
  */
  current_vid: {
    type: String
  },
  vid_queue: {
    type: [String]
  },
  messages: {
    type: [String]
  },
});

const Room = model('Room', roomSchema);

module.exports = Room;
