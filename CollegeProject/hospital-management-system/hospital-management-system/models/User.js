/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'doctor', 'nurse', 'patient'] }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  // email: { type: String, unique: true }, //removing currently due to some bugs
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'nurse', 'patient'], default: 'patient' },
});

module.exports = mongoose.model('User', userSchema);
