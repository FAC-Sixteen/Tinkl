const express = require('express');
// const path = require('path');

const router = express.Router();

const home = require('./home');
const location = require('./location')

router.get('/', home.get);
router.get('/location', location.get)

module.exports = router;
