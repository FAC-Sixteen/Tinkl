const test = require('tape');
const dbBuild = require('../model/database/db_build');

test('test dbBuild is working', (t) => {
  dbBuild
    .then((res) => {
      t.pass('database built');
      t.end();
    })
    .catch((err) => {
      t.fail('database failed to build', err);
      t.end();
    });
});
