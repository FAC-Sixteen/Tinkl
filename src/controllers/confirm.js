const qs = require('query-string');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

exports.get = (req, res) => {
  
    const filters = qs.parse(req.url.split('?')[1]);
    jwt.sign(filters, SECRET, (err, token) => {    
    //error handling doesn't work because the code stops running, but nothing is printed to console or user
    // if (!SECRET) return new TypeError('Env SECRET must be set');
      if (err) res.error(err);
      res.cookie('userfilters', token, { maxAge: 1800000 });
      res.end();
    });
  };
