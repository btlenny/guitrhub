const Guitar = require("../models/guitar");

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update,
};

async function create(req, res) {
  const guitar = await Guitar.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  guitar.reviews.push(req.body);
  try {
    await guitar.save();
    res.redirect(`/guitars/${guitar._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteReview(req, res) {
  const guitar = await Guitar.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  });
  if (!guitar) return res.redirect("/guitars");
  guitar.reviews.remove(req.params.id);
  await guitar.save();
  res.redirect(`/guitars/${guitar._id}`);
}

async function edit(req, res) {
  const guitar = await Guitar.findOne({ "reviews._id": req.params.id });
  const review = guitar.reviews.id(req.params.id);
  res.render("reviews/edit", { guitar, review });
}

async function update(req, res) {
  const guitar = await Guitar.findOne({ "reviews._id": req.params.id });
  const reviewSubdoc = guitar.reviews.id(req.params.id);
  if (!reviewSubdoc.user.equals(req.user._id))
    return res.redirect(`/guitars/${guitar._id}`);
  reviewSubdoc.content = req.body.content;
  reviewSubdoc.rating = req.body.rating;
  try {
    await guitar.save();
  } catch (err) {}
  res.redirect(`/guitars/${guitar._id}`);
}
