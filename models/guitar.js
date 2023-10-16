const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    brand: String,
    model: String,
    strings: Number,
    body: String,
    neck: String,
    fingerboard: String,
    radius: Number,
    frets: Number,
    scale: Number,
    pickups: String,
    tuners: String,
    bridge: String,
  });

  module.exports = mongoose.model('Guitar', guitarSchema);