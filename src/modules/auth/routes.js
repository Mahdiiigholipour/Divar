const router = require("express").Router();
const AuthController = require("./controller");

router.post("/send-otp", AuthController.sendOTP);
router.post("/check-otp", AuthController.checkOTP);

module.exports = {
  AuthRoutes: router,
};
