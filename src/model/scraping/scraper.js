const fs = require('fs');
const path = require('path');
const https = require('https')
const {GEOTOKEN} = require('../../config.js')

https.get('https://gbptm-stage.herokuapp.com/api/loos', (res) => {
  let loosData = '';

  res.on('data', chunk => {
    loosData += chunk;
  })

  res.on('end', () => {
    const parsedData = JSON.parse(loosData);
    // console.log(parsedData);
    let array = [];
    parsedData.map(looid => {
      getLooObject(looid._id)
        .then(res => )
    })
  })
})

const getLooObject = (id) => {
  new Promise((resolve, reject) => {
    https.get(`https://gbptm-stage.herokuapp.com/api/loos/${id}`, (res) => {
      let looData = '';

      res.on('data', chunk => {
        looData += chunk;
      })

      res.on('end', () => {
        const parsedLooData = JSON.parse(looData);
        if (parsedLooData.geometry.coordinates[0] > -0.602366 && parsedLooData.geometry.coordinates[0] < 0.314867) {
          if (parsedLooData.geometry.coordinates[1] > 51.246572 && parsedLooData.geometry.coordinates[1] < 51.711196) {
            if (parsedLooData.properties._doc.active) {


              const object = {
                active: true,
                name: parsedLooData.properties._doc.name,
                description: parsedLooData.properties._doc.notes,
                longitude: parsedLooData.geometry.coordinates[0],
                latitude: parsedLooData.geometry.coordinates[1],

              }
            }
          }
        }
      })

      res.on('error', err => {
        reject(err);
      })
    })
  })
}
