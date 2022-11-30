const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
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


userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
const User = model('User', userSchema);

module.exports = User;
