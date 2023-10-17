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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
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