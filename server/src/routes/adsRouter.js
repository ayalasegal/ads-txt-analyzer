const express = require('express');
const adsController = require('../controllers/adsController');

const router = express.Router();

router.post('/getAds', adsController.getAds);

module.exports = router;
