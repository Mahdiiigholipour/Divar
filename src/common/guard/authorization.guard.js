const createHttpError = require("http-errors");
const AuthorizationMessages = require("../messages/authorization");
const jwt = require("jsonwebtoken");
const UserModel = require("../../modules/user/model");

async function verifyAccessToken(req, res, next) {
  try {
    const token = req?.cookies?.access_token;

    if (!token)
      throw new createHttpError.Unauthorized(AuthorizationMessages.login);

    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (typeof data === "object" && "id" in data) {
      const user = await UserModel.findById(data.id, {
        OTP: 0,
        __v: 0,
        updatedAt: 0,
        verifiedMobile: 0,
      }).lean();

      if (!user)
        throw new createHttpError.NotFound(AuthorizationMessages.notFound);

      req.user = user;

      return next();
    }
    throw new createHttpError.Unauthorized(AuthorizationMessages.invalidToken);
  } catch (error) {
    next(error);
  }
}

module.exports = verifyAccessToken;
