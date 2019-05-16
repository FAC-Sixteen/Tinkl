const express = require('express');
// const path = require('path');

const router = express.Router();

const home = require('./home');
const location = require('./location');
const filter = require('./filter');
const list = require('./list');
const geolocation = require('./geolocation');

router.get('/', home.get);
router.get('/location', location.get);
router.get('/filter', filter.get);
router.get('/list', list.get);
router.get('/geolocation', geolocation.get);

module.exports = router;
