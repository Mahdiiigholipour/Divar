const autoBind = require("auto-bind");
const UserModel = require("../user/model");
const { randomInt } = require("crypto");
const createHttpError = require("http-errors");
const AuthMessages = require("./messages");
const JWT = require("jsonwebtoken");

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

  async checkOTP(mobile, code) {
    const user = await this.#checkExistByMobile(mobile);

    if (user?.OTP?.expiresIn < new Date().getTime())
      throw new createHttpError.Unauthorized(AuthMessages.OTPCodeExpired);

    if (code !== user?.OTP?.code)
      throw new createHttpError.Unauthorized(AuthMessages.incorrectOTPCode);

    if (user.verifiedMobile === false) user.verifiedMobile = true;

    const accessToken = this.#signToken({ mobile, id: user._id });

    await user.save();
    return accessToken;
  }
  async logout() {}

  // private functions
  //  checkOTP
  #signToken(payload) {
    return JWT.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1y" });
  }
  async #checkExistByMobile(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (!user) throw new createHttpError.NotFound(AuthMessages.userNotFound);
    return user;
  }

  // sendOTP()
  async #sendOTPForNewUser(mobile) {
    let newUser = await this.#model.create({ mobile });
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

    if (user?.OTP?.code && user?.OTP?.expiresIn > now)
      throw new createHttpError.BadRequest(AuthMessages.OTPCodeNotExpired);

    user.OTP = {
      code: randomInt(10000, 99999),
      expiresIn: now + 1000 * 60 * 2,
    };

    return user;
  }
}

module.exports = new AuthService();
