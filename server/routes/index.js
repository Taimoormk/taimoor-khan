var getHomeHandler = require("../handlers/getHomeHandler");

module.exports = app => {
  app.get("/", getHomeHandler);
};
