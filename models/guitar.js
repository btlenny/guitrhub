const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  }
  }, {
    timestamps:true
})


const guitarSchema = new Schema({
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
      reviews: [reviewSchema]
    }, {
      timestamps: true
    });

module.exports = mongoose.model('Guitar', guitarSchema);