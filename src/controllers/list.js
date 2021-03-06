const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { SECRET } = require('../config');
const getData = require('../model/queries/getData');

const formatArray = res => res.map((toilet) => {
  toilet.map_link = `https://www.google.com/maps/dir//${toilet.latitude},${toilet.longitude}/@${toilet.latitude},${toilet.longitude},16z`;
  toilet.distance = `${Math.floor(toilet.distance * 100) / 100} miles away`;
  if (toilet.free === 'probable') {
    toilet.probable = true;
    toilet.definite = false;
  } else if (toilet.free === 'definite') {
    toilet.probable = false;
    toilet.definite = true;
  } else {
    toilet.probable = false;
    toilet.definite = false;
  }
  return toilet;
});

exports.get = (req, res) => {
  if (!req.headers.cookie) {
    res.redirect('/location');
    res.end();
  }

  const cookieData = cookie.parse(req.headers.cookie);

  if (cookieData.userlocation === undefined) {
    res.redirect('/location');
    res.end();
  }

  if (cookieData.userfilters === undefined) {
    res.redirect('/filter');
    res.end();
  }

  const locationJWT = cookieData.userlocation;

  const coordinates = jwt.verify(locationJWT, SECRET);

  const filterJWT = cookieData.userfilters;
  const filters = jwt.verify(filterJWT, SECRET);

  const { lat } = coordinates;
  const { long } = coordinates;

  getData.getToilets(lat, long, filters)
    .then((getDataResult) => {
      if (getDataResult.length === 0) {
        res.render('list', {
          pageTitle: 'Near You', navBack: '/filter', navForward: '/',
        });
      } else {
        const toiletsArray = formatArray(getDataResult);
        res.render('list', {
          pageTitle: 'Near You', navBack: '/filter', navForward: '/', toiletsArray,
        });
      }
    })
    .catch(error => console.error(error));
};
