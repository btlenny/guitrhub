const express = require("express");
const router = express.Router();
const guitarsCtrl = require("../controllers/guitars");
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
