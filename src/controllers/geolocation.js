const qs = require('query-string');

exports.get = (req, res) => {
  const coords = qs.parse(req.url.split('?')[1]);
  console.log(coords);
}
