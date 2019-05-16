const qs = require('query-string');

exports.get = (req, res) => {
  const postcode = qs.parse(req.url.split('?')[1]).postcode;
  console.log(postcode);
}
