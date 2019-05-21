const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { SECRET } = require('../config');
const getData = require('../model/queries/getData');

exports.get = (req, res) => {
  const cookieLocation = cookie.parse(req.headers.cookie);
  const locationJWT = cookieLocation.userlocation;
  const locationCoordinates = jwt.verify(locationJWT, SECRET);

  const lat = locationCoordinates.lat;
  const long = locationCoordinates.long;

  getData.getToilets(lat, long).then(res => console.log(res)).catch(error => console.error(error));

  res.render('list', {
    pageTitle: 'Near You', navBack: '/filter', navForward: '/', listItemArray,
  });
};

// array will come from database query given the filters selected
const listItemArray = [
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
  },
];
