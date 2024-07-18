const mainRouter = require("express").Router();
const { AuthRoutes } = require("./modules/auth/routes");
const { UserRoutes } = require("./modules/user/router");

mainRouter.use("/auth", AuthRoutes);
mainRouter.use("/user", UserRoutes);

module.exports = mainRouter;
