const Guitar = require("../models/guitar");

module.exports = {
  new: newGuitar,
  create,
  show,
  index,
};

function newGuitar(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails
  res.render("guitars/new", { errorMsg: "" });
}

async function show(req, res) {
  const guitar = await Guitar.findById(req.params.id).populate("reviews");
  res.render("guitars/show", { title: "Guitar Reviews", guitar });
}

async function create(req, res) {
  try {
    await Guitar.create(req.body);
    res.redirect("/guitars");
  } catch (err) {
    res.render("guitars/new", { errorMsg: "An error occurred." });
  }
}

async function index(req, res) {
  const guitars = await Guitar.find({}).exec();
  res.render("guitars/index", { guitars });
}