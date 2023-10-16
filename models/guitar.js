const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    strings: Number,
    bodywood: String,
    neckwood: String,
    fingerboardwood: String,
    fretboardradius: Number,
    fret: Number,
    scalelength: Number,
    neckpickup: String,
    middlepickup: String,
    bridepickup: String,
    tuners: String,
    bridge: String,
  });

  module.exports = mongoose.model('Guitar', guitarSchema);