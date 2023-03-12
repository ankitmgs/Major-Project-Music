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
  phone: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  cpassword: {
    type: String,
    // required: true,
  },
  awards: {
    type: String,
    // required: true,
  },
  concerts: {
    type: String,
    // required: true,
  },
  website: {
    type: String,
    // required: true,
  },
  twitter: {
    type: String,
    // required: true,
  },
  instagram: {
    type: String,
    // required: true,
  },
  facebook: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("artist", model);
