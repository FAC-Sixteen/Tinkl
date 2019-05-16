const qs = require('query-string');
const { SECRET } = require('../config');
const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
  const coords = qs.parse(req.url.split('?')[1]);

  jwt.sign(coords, SECRET, (err, token) => {
    if (err) console.error("cookie creation error: ", err);
    res.cookie('userlocation', token, { maxAge: 1800000});
    res.end();
  })
}
