const fs = require('fs');
const path = require('path');
const https = require('https');
const { GEOTOKEN } = require('../../config.js');

https.get('https://gbptm-stage.herokuapp.com/api/loos', (res) => {
  let loosData = '';

  res.on('data', chunk => {
    loosData += chunk;
  })

  res.on('end', () => {
    const parsedData = JSON.parse(loosData);
    let looArray = [];
    parsedData.map(looid => {
      getLooObject(looid._id)
        .then(res => looArray.push(res))
        .catch(err => console.error(err));
    })
    //stringify array and write to file
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

              // variables to create
              let looAddress;

              let looAccessible = null;
              if (parsedLooData.properties._doc.accessibleType == 'none') {
                looAccessible = false;
              } else if(parsedLooData.properties._doc.accessibleType !== null) {
              looAccessible = true;
              }

              let looNeutral;


              let looCustomerOnly;
              let looFee;

              const object = {
                active: true,
                name: parsedLooData.properties._doc.name,
                description: parsedLooData.properties._doc.notes,
                longitude: parsedLooData.geometry.coordinates[0],
                latitude: parsedLooData.geometry.coordinates[1],
                address: looAddress,
                opening_hour: '09:00',
                closing_hour: '17:00',
                accessible: looAccessible, /* convert text into boolean, if none, false and otherwise, true */
                gender_neutral: looNeutral, 
                baby_changing: parsedLooData.properties._doc.babyChange,
                customer_toilet: looCustomerOnly,
                price: looFee,
                radar: parsedLooData.properties._doc.radar,
                removal_reason: null 
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
