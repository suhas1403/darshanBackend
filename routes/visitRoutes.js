const express = require('express');
const visitController = require('../controllers/visitController');

const router = express.Router();

router.post('/visit', visitController.handleVisit);

module.exports = router;
