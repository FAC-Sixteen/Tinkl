const test = require('tape');
const supertest = require('supertest');
const router = require('../app');

test('Home route returns an html file', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'Error should be null');
      t.pass('Home route is a success yes?');
      t.end();
    });
});
