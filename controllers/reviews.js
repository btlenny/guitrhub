const Guitar = require('../models/guitar');

module.exports = {
  create,
  delete: deleteReview
};


async function create(req, res) {
  const guitar = await Guitar.findById(req.params.id);
  req.body.user = req.user._id; // Set user ID
  req.body.userName = req.user.name; // Set user name
  req.body.userAvatar = req.user.avatar; // Set user avatar
  guitar.reviews.push(req.body);
  try {
    await guitar.save();
    res.redirect(`/guitars/${guitar._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}




async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const guitar = await Guitar.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!guitar) return res.redirect('/guitars');
  // Remove the review using the remove method available on Mongoose arrays
  guitar.reviews.remove(req.params.id);
  // Save the updated movie doc
  await guitar.save();
  // Redirect back to the movie's show view
  res.redirect(`/guitars/${guitar._id}`);
}

