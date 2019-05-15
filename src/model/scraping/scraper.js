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
    // let looArray = [];
    let looArray = parsedData.map(looid => {
      getLooObject(looid._id)
        .then(result => {
          // console.log('this is the result', result);
          console.log(looArray);
          return result;
        })
        .catch(err => 1+1);
    })
    //stringify array and write to file
    console.log('This is the looArray: ', looArray)
  })
})

const getLooObject = (id) => {
  return new Promise((resolve, reject) => {
    let url = `https://gbptm-stage.herokuapp.com/api/loos/${id}`;
    // console.log(url);
    https.get(url, (res) => {
      let looData = '';
      // console.log('we are in https');

      res.on('data', chunk => {        
        looData += chunk;
      })

      res.on('end', () => {
        // console.log('We are in res.on(end)');
        const parsedLooData = JSON.parse(looData);
        if (parsedLooData.geometry.coordinates[0] > -0.602366 && parsedLooData.geometry.coordinates[0] < 0.314867) {
          // console.log('if level 1');
          if (parsedLooData.geometry.coordinates[1] > 51.246572 && parsedLooData.geometry.coordinates[1] < 51.711196) {
            // console.log('if level 2');
            if (parsedLooData.properties._doc.active) {
              // console.log('if level 3 actives');

              // variables to create
              let looAddress = '149 Fonthill Road';

              let looAccessible = null;
                if (parsedLooData.properties._doc.accessibleType == 'none') {
                  looAccessible = false;
                } else if(parsedLooData.properties._doc.accessibleType !== null) {
                looAccessible = true;
                };

              let looNeutral = null;
                if (parsedLooData.properties._doc.type == 'unisex') {
                  looNeutral = true;
                } else if (parsedLooData.properties._doc.type != null) {
                  looNeutral = false;
                };

              let looCustomerOnly = null;
                if (parsedLooData.properties._doc.access == 'public') {
                  looCustomerOnly = false;
                } else if (parsedLooData.properties._doc.access != null) {
                  looCustomerOnly = true;
                };

              let looFee = null;
                if (parsedLooData.properties._doc.fee != null && parsedLooData.properties._doc.fee.match(/1-9/) == null) {
                  looFee = 0.00;
                };

              const object = {
                active: true,
                name: parsedLooData.properties._doc.name,
                description: parsedLooData.properties._doc.notes,
                longitude: parsedLooData.geometry.coordinates[0],
                latitude: parsedLooData.geometry.coordinates[1],
                address: looAddress,
                opening_hour: null,
                closing_hour: null,
                accessible: looAccessible, /* convert text into boolean, if none, false and otherwise, true */
                gender_neutral: looNeutral, 
                baby_changing: parsedLooData.properties._doc.babyChange,
                customer_toilet: looCustomerOnly,
                price: looFee,
                radar: parsedLooData.properties._doc.radar,
                removal_reason: null 
              }
              // console.log('object is ', object);
              resolve(object);
            }
          }
        }
        reject('No!!!');
      })

      // res.on('error', err => {
      //   reject(err);
      // })
    }).on('error', (e) => {
      reject('last reject error' + e);
    });
  })
}
