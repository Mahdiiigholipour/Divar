const createHttpError = require("http-errors");
const AuthorizationMessages = require("../messages/authorization");
const jwt = require("jsonwebtoken");
const UserModel = require("../../modules/user/model");

function verifyAccessToken(req, res, next) {
  const token = req?.cookies?.access_token;
  if (!token)
    throw new createHttpError.Unauthorized(AuthorizationMessages.login);

  const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (typeof data === "object" && "id" in data) {
    const user = UserModel.findById(id, { OTP: 0, _v: 0 }).lean();
    if (!user)
      throw new createHttpError.NotFound(AuthorizationMessages.notFound);

    req.user = user;
    return next();
  }
  throw new createHttpError.Unauthorized(AuthorizationMessages.invalidToken);
}

module.exports = verifyAccessToken;
