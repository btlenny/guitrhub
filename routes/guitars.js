const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const guitarsCtrl = require('../controllers/guitars');
	
// GET /movies/new
router.get('/new', guitarsCtrl.new);
	
module.exports = router;