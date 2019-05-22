const qs = require('query-string');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

exports.get = (req, res) => {
  if (!SECRET) {
    throw new Error('Env SECRET must be set');
  } else {
    const filters = qs.parse(req.url.split('?')[1]);
    jwt.sign(filters, SECRET, (err, token) => {
      if (err) res.error(err);
      res.cookie('userfilters', token, { maxAge: 1800000 });
      res.end();
    });
  }
};
