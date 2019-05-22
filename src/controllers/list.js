const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { SECRET } = require('../config');
const getData = require('../model/queries/getData');

exports.get = (req, res) => {
  const cookieData = cookie.parse(req.headers.cookie);

  const locationJWT = cookieData.userlocation;
  const coordinates = jwt.verify(locationJWT, SECRET);

  const filterJWT = cookieData.userfilters;
  const filters = jwt.verify(filterJWT, SECRET);

  const lat = coordinates.lat;
  const long = coordinates.long;

  getData.getToilets(lat, long, filters)
  .then(getDataResult => {
    const toiletsArray = generateMapLink(getDataResult);
    res.render('list', {
      pageTitle: 'Near You', navBack: '/filter', navForward: '/', toiletsArray,
    });
  })
  .catch(error => console.error(error));
};

const generateMapLink = (res) => {
    return res.map(toilet => {
      toilet.map_link = `https://www.google.com/maps/dir//${toilet.latitude},${toilet.longitude}/`;
      return toilet;
    })
}