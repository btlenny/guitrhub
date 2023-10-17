const Guitar = require('../models/guitar');

module.exports = {
  create,
  delete: deleteReview
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

  async function deleteReview(req, res) {
    const guitarId = req.params.id;
    const reviewId = req.params.reviewId;
    try {
      // Find the guitar by its ID
      const guitar = await Guitar.findById(guitarId);
      if (!guitar) {
        return res.status(404).send('Guitar not found');
      }
      // Find and remove the review by its ID
      const reviewIndex = guitar.reviews.findIndex(review => review.id === reviewId);
      if (reviewIndex === -1) {
        return res.status(404).send('Review not found');
      }
      guitar.reviews.splice(reviewIndex, 1);
      await guitar.save();
      res.redirect(`/guitars/${guitar._id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }