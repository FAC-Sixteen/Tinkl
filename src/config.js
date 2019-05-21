require('env2')('.env');

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  GEOTOKEN: process.env.GEOTOKEN,
  SECRET: process.env.SECRET,
};
