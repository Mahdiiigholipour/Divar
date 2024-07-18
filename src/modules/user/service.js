const autoBind = require("auto-bind");

class UserService {
  #model;
  constructor() {
    autoBind(this);
  }
}

module.exports = new UserService();
