const verifyAccessToken = require("../../common/guard/authorization.guard");
const UserController = require("./controller");
const router = require("express").Router();
router.get("/whoami", verifyAccessToken, UserController.whoami);

module.exports = {
  UserRoutes: router,
};
