const dbConnection = require('../database/db_connection');
const fs = require('fs');
const path = require('path');

const insertToilets = () => {
    const toiletData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'database', 'toilets.json')));
    toiletData.data.map(toilet => {
        dbConnection.query('INSERT INTO toilets (active, name, description, longitude, latitude, address, opening_hour, closing_hour, accessible, gender_neutral, baby_changing, customer_toilet, price, free, radar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)',
        [toilet.active, toilet.name, toilet.description, toilet.longitude, toilet.latitude, toilet.address, toilet.opening_hour, toilet.closing_hour, toilet.accessible, toilet.gender_neutral, toilet.baby_changing, toilet.customer_toilet, toilet.price, toilet.free, toilet.radar])
        .then(res => console.log('Entry made'))
        .catch(err => console.log(err));
    })
}

insertToilets();