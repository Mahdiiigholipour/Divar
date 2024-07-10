const autoBind = require("autobind");
const AuthService = require("./service");
const AuthMessages = require("./messages");

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = AuthService;
  }

  // public functions
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      const result = this.#service.sendOTP(mobile);
      return {
        message: AuthMessages.OTPSentSuccessfully,
      };
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  // private functions
}

module.exports = new AuthController();
