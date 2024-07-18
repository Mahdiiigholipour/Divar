const router = require("express").Router();
const AuthController = require("./controller");
const verifyAccessToken = require("../../common/guard/authorization.guard");

router.post("/send-otp", AuthController.sendOTP);
router.post("/check-otp", AuthController.checkOTP);
router.get("/logout", verifyAccessToken, AuthController.logout);

module.exports = {
  AuthRoutes: router,
};
