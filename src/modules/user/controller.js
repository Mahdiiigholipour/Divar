const autoBind = require("auto-bind");
const UserService = require("./service");
class UserController {
  #service;

  constructor() {
    autoBind(this);
    this.#service = UserService;
  }
}

module.exports = new UserController();
