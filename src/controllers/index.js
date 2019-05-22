const express = require('express');
// const path = require('path');

const router = express.Router();

const home = require('./home');
const location = require('./location');
const filter = require('./filter');
const list = require('./list');
const geolocation = require('./geolocation');
const postcode = require('./postcode');
const confirm = require('./confirm');
const error = require('./error');

router.get('/', home.get);
router.get('/location', location.get);
router.get('/filter', filter.get);
router.get('/list', list.get);
router.get('/geolocation', geolocation.get);
router.get('/postcode', postcode.get);
router.get('/confirm', confirm.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
