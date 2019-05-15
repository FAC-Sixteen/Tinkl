const express = require('express');
// const path = require('path');

const router = express.Router();

const home = require('./home');
const location = require('./location');
const filter = require('./filter');

router.get('/', home.get);
router.get('/location', location.get);
router.get('/filter', filter.get);

module.exports = router;
