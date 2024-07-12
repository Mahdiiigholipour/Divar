const autoBind = require("auto-bind");
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
      const result = await this.#service.sendOTP(mobile);
      return res.json({ result, message: AuthMessages.OTPSentSuccessfully });
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const token = await this.#service.checkOTP(mobile, code);
      return res.json({
        token,
        message: AuthMessages.correctOTPCode,
      });
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
