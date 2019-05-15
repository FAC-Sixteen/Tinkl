const test = require('tape');
const supertest = require('supertest');
const router = require('../app');

test('Home route returns an html file', t => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err => {
      t.error(err, 'Error should be null');
      t.pass('Home route works!');
      t.end();
    });
});

test('Location page returns an html file', t => {
  supertest(router)
    .get('/location')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err => {
      t.error(err, 'Error should be null');
      t.pass('Location route works!');
      t.end();
    });
});

test('Filter page returns an html file', t => {
  supertest(router)
    .get('/filter')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err => {
      t.error(err, 'Error should be null');
      t.pass('Filter route works!');
      t.end();
    });
});

test('List page returns an html file', t => {
  supertest(router)
    .get('/list')
    .expect(200)
    .expect('Content-Type', /html/)
    .end(err => {
      t.error(err, 'Error should be null');
      t.pass('List route works!');
      t.end();
    });
});