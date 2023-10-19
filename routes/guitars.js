const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const guitarsCtrl = require("../controllers/guitars");
// Require the auth middleware
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /guitars
router.get("/", guitarsCtrl.index);
// Use ensureLoggedIn middleware to protect routes
router.get("/new", ensureLoggedIn, guitarsCtrl.new);
// GET /guitars/:id (show functionality) MUST be below new route
router.get("/:id", guitarsCtrl.show);
// Post/ guitars
router.post("/", ensureLoggedIn, guitarsCtrl.create);

module.exports = router;
