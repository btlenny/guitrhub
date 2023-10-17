const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


// POST /guitars/:id/reviews (create review for a guitar)
router.post('/guitars/:id/reviews', reviewsCtrl.create);

module.exports = router;