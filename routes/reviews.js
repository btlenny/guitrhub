const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// POST /guitars/:id/reviews (create review for a guitar)
router.post('/guitars/:id/reviews', reviewsCtrl.create);

// DELETE /guitars/:id/reviews/:reviewId (delete a review for a guitar)
router.delete('/guitars/:id/reviews/:reviewId', reviewsCtrl.delete);

module.exports = router;