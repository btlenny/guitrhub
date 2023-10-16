const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    year: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    strings: {
      type: String,
      required: true
    },
    bodywood: {
      type: String,
      required: true
    },
    neckwood: {
      type: String,
      required: true
    },
    fingerboardwood: {
      type: String,
      required: true
    },
    fretboardradius: {
      type: String,
      required: true
    },
    frets: {
      type: String,
      required: true
    },
    scalelength: {
      type: String,
      required: true
    },
    neckpickup: {
      type: String,
      required: true
    },
    middlepickup: {
      type: String,
      required: true
    },
    bridgepickup:{
      type: String,
      required: true
    },
    tuners: {
      type: String,
      required: true
    },
    bridge: {
      type: String,
      required: true
    },
    lefthanded: {
      type: Boolean, 
      default: false
    },
  });

  module.exports = mongoose.model('Guitar', guitarSchema);