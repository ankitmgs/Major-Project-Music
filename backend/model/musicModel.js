const mongoose = require("mongoose");

const model = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    // required: true,
  },
  artist: { 
    type: mongoose.Types.ObjectId,
    ref: 'artist',
    required: true,
  },
  composer: { 
    type: String,
    required: true,
  },
  producer: { 
    type: String,
  },
  writer: { 
    type: String,
  },
  genre: { 
    type: String,
  },
  description: { 
    type: String,
  },
  contibutor: { 
    type: String,
  },
  language: { 
    type: String,
    required: true,
  },
  copyrightYear: {
    type: Date,
    required: true,

  },
  copyrightHolder: {
    type: String,

  },
  ISRCcode: {
    type: String,

  },
  songDuration: {
    type: Number,
    required: true,
  },
  Bpm: {
    type: Number,
    required: true,
  },
 });

 module.exports = mongoose.model("music", model);
