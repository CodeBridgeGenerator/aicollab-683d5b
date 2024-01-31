const assert = require('assert');
const app = require('../../src/app');

describe('\'procducts\' service', () => {
  it('registered the service', () => {
    const service = app.service('procducts');

    assert.ok(service, 'Registered the service (procducts)');
  });
});
