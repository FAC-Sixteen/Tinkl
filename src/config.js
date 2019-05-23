require('env2')('.env');

if(!process.env.DATABASE_URL) {
  console.error('No database url set in .env - please ask Team Tinkl for a link!');
} 

if(!process.env.TEST_DATABASE_URL) {
  console.error('No test database url set in .env - please set up a local test database!');
}

if(!process.env.SECRET) {
  console.error('No secret set in .env - please ask Team Tinkl for a link!');
}

//GEOTOKEN is needed to scrape data from another database - it was used once in setup but is not needed in deployment.

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
    GEOTOKEN: process.env.GEOTOKEN,
    SECRET: process.env.SECRET,
};  


