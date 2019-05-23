const qs = require('query-string');
const https = require('https');

exports.get = (req, res) => {
  const { postcode } = qs.parse(req.url.split('?')[1]);
  const url = `https://api.postcodes.io/postcodes/${postcode}`;
  https.get(url, (result) => {
    let data = '';

    result.on('data', (chunk) => {
      data += chunk;
    });

    result.on('end', () => {
      const parsedData = JSON.parse(data);
      const coords = { longitude: parsedData.result.longitude, latitude: parsedData.result.latitude };
      res.json(coords);
    });
  });
};
