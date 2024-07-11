const autoBind = require("auto-bind");
const UserModel = require("../user/model");
const { randomInt } = require("crypto");
const createHttpError = require("http-errors");
const AuthMessages = require("./messages");

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }

  // public functions
  async sendOTP(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (user) return await this.#sendOTPForExistedUser(user);
    else return await this.#sendOTPForNewUser(mobile);
  }

  async checkOTP(mobile, code) {}
  async logout() {}

  // private functions

  // sendOTP()
  async #sendOTPForNewUser(mobile) {
    const newUser = await this.#model.create({ mobile });
    newUser = await this.#generateOTPCode(newUser);
    await newUser.save();
    return newUser;
  }

  async #sendOTPForExistedUser(user) {
    user = await this.#generateOTPCode(user);
    await user.save();
    return user;
  }

  async #generateOTPCode(user) {
    const now = new Date().getTime();

    if (user.OTP.code && user.OTP.expiresIn > now)
      throw new createHttpError.BadRequest(AuthMessages.OTPCodeNotExpired);

    user.OTP = {
      code: randomInt(10000, 99999),
      expiresIn: now * 1000 * 60 * 2,
    };

    return user;
  }
}

module.exports = new AuthService();
