const dbConnection = require('../database/db_connection');

const getToilets = (lat, long) => {
    return new Promise((resolve, reject) => {
        dbConnection.query('SELECT * FROM (SELECT *, ( 3959 * acos(cos(radians($1)) * cos(radians(latitude)) * cos(radians(longitude) - radians($2)) + sin(radians($1)) * sin(radians(latitude)))) AS distance FROM toilets) as distance WHERE distance < 1 ORDER BY distance LIMIT 12;', [lat, long])
        .then(toiletsClose => resolve(toiletsClose.rows))
        .catch(error => console.error(error));
    });
}

module.exports = {
    getToilets
}