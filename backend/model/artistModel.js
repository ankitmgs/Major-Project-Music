const mongoose = require("mongoose");

const model = new mongoose.Schema({
  email: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  avatar: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    // required: true,
  },
  cpassword: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  awards: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("artist", model);
