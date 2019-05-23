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
      t.pass('Home route works!');
      t.end();
    });
});

test('Location page returns an html file', (t) => {
  supertest(router)
    .get('/location')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'Error should be null');
      t.pass('Location route works!');
      t.end();
    });
});

test('Filter page returns an html file', (t) => {
  supertest(router)
    .get('/filter')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'Error should be null');
      t.pass('Filter route works!');
      t.end();
    });
});

test('List page returns an html file', (t) => {
  supertest(router)
    .get('/list')
    .set('Cookie', ['userlocation=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXQiOiI1MS41NjM4MTU2IiwibG9uZyI6Ii0wLjEwNzc2ODQ5OTk5OTk5OTk5IiwiaWF0IjoxNTU4NTIzNjE5fQ.Wlya08T1gYtdEsFjOvHE4SkcmcLA3nmvz6X7_JyVC14', 'userfilters=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiJmYWxzZSIsImJhYiI6ImZhbHNlIiwiZnJlIjoiZmFsc2UiLCJnZW4iOiJmYWxzZSIsInB1YiI6InRydWUiLCJpYXQiOjE1NTg1MjM2NzN9.CfnJM3f3DPUA-X9G8ompBtMXs1GawgngyaGAnp2GYU4'])
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'Error should be null');
      t.pass('List route works!');
      t.end();
    });
});

test('/geolocation gives cookie', (t) => {
  supertest(router)
    .get('/geolocation?long=50&lat=1')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'Error should be null');
      t.equals(res.header['set-cookie'][0].split('=')[0], 'userlocation', 'should have cookie called userlocation');
      t.end();
    });
});

test('/postcode gives long and lat', (t) => {
  const expected = { longitude: -0.107694, latitude: 51.563729 };
  supertest(router)
    .get('/postcode?postcode=N4%203HF')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'Error should be null');
      t.deepEqual(res.body, expected, 'should equal object of long and lat');
      t.end();
    });
});

test('/confirm gives cookie', (t) => {
  supertest(router)
    .get('/confirm?cus=true&bab=false&acc=true&fre=false&gen=true')
    .expect(200)
    .end((err, res) => {
      t.error(err, 'Error should be null');
      t.equals(res.header['set-cookie'][0].split('=')[0], 'userfilters', 'should have cookie called userfilters');
      t.end();
    });
});

test('404 error returns 404 error page', (t) => {
  supertest(router)
    .get('/sadcat')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      t.error(err, 'Error should be null');
      t.pass('404 route works!');
      t.end();
    });
});
