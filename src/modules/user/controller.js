const autoBind = require("auto-bind");
const UserService = require("./service");
class UserController {
  #service;

  constructor() {
    autoBind(this);
    this.#service = UserService;
  }
  async whoami(req, res, next) {
    try {
      const user = req.user;
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
