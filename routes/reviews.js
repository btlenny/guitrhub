const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// POST /guitars/:id/reviews (create review for a guitar)
router.post('/guitars/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

// DELETE /guitars/:id/reviews/:reviewId (delete a review for a guitar)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;