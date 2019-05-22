const test = require('tape');
const dbBuild = require('../model/database/db_build');
const { getToilets } = require('../model/queries/getData');

const filters = {
  pub: false, 
  fre: true,
  bab: true,
  acc: true,
  gen: false
}

const testToilet = { 
  id: 1, 
  active: true, 
  name: 'Waterstones', 
  description: 'Toilet in the back behind the counter', 
  longitude: '-0.12354', 
  latitude: '51.57823', 
  address: '2-4 The Broadway, Crouch End, London N8 9SN', 
  opening_hour: '09:00:00', 
  closing_hour: '17:00:00', 
  accessible: true, 
  gender_neutral: false, 
  baby_changing: true, 
  customer_toilet: true, 
  price: '0.00', 
  radar: null, 
  removal_reason: null, 
  distance: 0.435528192373214 
}

test('test dbBuild is working', t => {
  dbBuild
    .then(() => {
      t.pass('database built');
      t.end();
    })
    .catch((err) => {
      t.fail('database failed to build', err);
      t.end();
    });
});

test('getToilets gets data from the database', t => {
  dbBuild
    .then(() => {
      getToilets('51.572', '-0.122', filters)
      .then((res) => {
        t.deepEquals(res[0], testToilet, 'Result of getToilets should be testToilet');
        t.end();
      })
    })

})
