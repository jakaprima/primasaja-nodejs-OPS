import http from 'http';
import assert from 'assert';

import '../lib/index.js';

describe('Node Server testing', () => {
  it('harus return 200', done => {
    http.get('http://0.0.0.0:8080', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});