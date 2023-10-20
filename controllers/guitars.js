const Guitar = require("../models/guitar");
console.log('New Guitar:', create)

module.exports = {
  new: newGuitar,
  create,
  show,
  index,
};

function newGuitar(req, res) {
  res.render("guitars/new", { errorMsg: "" });
}

async function show(req, res) {
  const guitar = await Guitar.findById(req.params.id).populate("reviews");
  res.render("guitars/show", { title: "Guitar Reviews", guitar });
}

async function create(req, res) {
  console.log("Route accessed");
  console.log("Submitted Brand:", req.body.brand);
  console.log("Submitted Model:", req.body.model);

  try {
    await Guitar.create(req.body);
    res.redirect("guitars");
  } catch (err) {
    console.log('Error:', err);
    res.render("guitars/new", { errorMsg: "An error occurred." });
  }
}

async function index(req, res) {
  const guitars = await Guitar.find({}).exec();
  res.render("guitars/index", { guitars });
}

