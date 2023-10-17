const Guitar = require('../models/guitar');

module.exports = {
  create
};

async function create(req, res) {
    const guitar = await Guitar.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    guitar.reviews.push(req.body);
    try {
      // Save any changes made to the movie doc
      await guitar.save();
    } catch (err) {
      console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/guitars/${guitar._id}`);
  }