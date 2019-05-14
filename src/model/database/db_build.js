const fs = require('fs');
const dbConnection = require('./db_connection');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const dbBuild = new Promise((resolve, reject) => {
    dbConnection.query(sql)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

dbBuild
.then(res => console.log('Built toilet database: ', res))
.catch(err => console.log('Database failed to build', err));

module.exports = dbBuild;