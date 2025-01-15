// routes/countEntriesRoutes.js
const express = require('express');
const countEntriesController = require('../controllers/countEntriesController');

const router = express.Router();

router.post('/count', countEntriesController.countEntries);

module.exports = router;
