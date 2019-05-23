const dbConnection = require('../database/db_connection');

const getToilets = (lat, long, filters) => {
    return new Promise((resolve, reject) => {
        let SQLfilters = '';
        
        if (filters.pub === 'true') SQLfilters += "AND customer_toilet = false ";
        if (filters.fre === 'true') SQLfilters += "AND free = 'probable' OR free = 'definite' ";
        if (filters.bab === 'true') SQLfilters += "AND baby_changing = true ";
        if (filters.acc === 'true') SQLfilters += "AND accessible = true ";
        if (filters.gen === 'true') SQLfilters += "AND gender_neutral = true ";
        if (SQLfilters.charAt(SQLfilters.length - 1) === ' ') {
            let SQLfiltersArray = SQLfilters.split('');
            SQLfiltersArray.pop();
            SQLfilters = SQLfiltersArray.join('');
        }

        const SQLquery = `SELECT * FROM (SELECT *, ( 3959 * acos(cos(radians($1)) * cos(radians(latitude)) * cos(radians(longitude) - radians($2)) + sin(radians($1)) * sin(radians(latitude)))) AS distance FROM toilets) AS distance WHERE distance < 1 ${SQLfilters} ORDER BY distance LIMIT 12;`

        dbConnection.query(SQLquery, [lat, long])
        .then(toiletsClose => resolve(toiletsClose.rows))
        .catch(error => reject(error));
    });
}

module.exports = {
    getToilets
}
