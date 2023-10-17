const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const guitarsCtrl = require('../controllers/guitars');


// GET /guitars
router.get('/', guitarsCtrl.index);
// GET /gutiars/new
router.get('/new', guitarsCtrl.new);
// GET /guitars/:id (show functionality) MUST be below new route
router.get('/:id', guitarsCtrl.show);
// POST /guitars
router.post('/', guitarsCtrl.create);


	
module.exports = router;