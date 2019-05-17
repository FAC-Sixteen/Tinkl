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
    getLooArray(parsedData);
  })
})

let looArray = [];

const getLooArray = async (json) => {
  console.log('in getLooArray');
  return await Promise.all(json.map((looid, index) => getLooObject(looid._id, index)))
    .then(res => res.filter(x => x !== undefined))
    .then(res => looArray = looArray.concat(res))
    .then(newToiletData => appendJSON(newToiletData))
    .catch(err => console.log('Caught error: ', err));
}

const getLooObject = (id, index) => {
  return new Promise((resolve, reject) => {
    if (index > 0 && index < 100) {
      let url = `https://gbptm-stage.herokuapp.com/api/loos/${id}`;
      https.get(url, (res) => {
        let looData = '';

        res.on('data', chunk => {
          looData += chunk;
        })

        res.on('end', () => {
          const parsedLooData = JSON.parse(looData);
          if (parsedLooData.geometry.coordinates[0] > -0.602366
            && parsedLooData.geometry.coordinates[0] < 0.314867 
            && parsedLooData.geometry.coordinates[1] > 51.246572
            && parsedLooData.geometry.coordinates[1] < 51.711196
            && parsedLooData.properties._doc.active) {

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
                resolve(object);
              } else {
                resolve();
              }
            }
      )
      }).on('error', (e) => {
        reject('error is ' + e + 'on index ' + index);
      });
  } else {
    resolve();
  }
  });
};

const appendJSON = newToiletData => {
  let toiletJSON;
  let newJSON;

  fs.readFile(path.join(__dirname, '..', 'database', 'toilets.json'), 'utf8', (err, file) => {
    if (err) {
      console.error(err);
      return;
    }
    toiletJSON = JSON.parse(file);
    console.log(toiletJSON);
    newToiletData = newToiletData.concat(toiletJSON['data']);
    toiletJSON['data'] = newToiletData;
    newJSON = JSON.stringify(toiletJSON);
    console.log(newJSON);

    fs.writeFile(path.join(__dirname, '..', 'database', 'toilets.json'), newJSON, err => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
}