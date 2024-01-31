const users = require("./users/users.service.js");
const procducts = require("./procducts/procducts.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(procducts);
    // ~cb-add-configure-service-name~
};
