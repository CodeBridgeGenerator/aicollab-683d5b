const { Procducts } = require('./procducts.class');
const createModel = require('../../models/procducts.model');
const hooks = require('./procducts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/procducts', new Procducts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('procducts');

  service.hooks(hooks);
};